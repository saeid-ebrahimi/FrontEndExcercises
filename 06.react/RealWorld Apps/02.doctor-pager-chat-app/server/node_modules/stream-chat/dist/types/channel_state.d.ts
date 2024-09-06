import { Channel } from './channel';
import { ChannelMemberResponse, ChannelMembership, FormatMessageResponse, Event, LiteralStringForUnion, MessageResponse, ReactionResponse, UnknownType, UserResponse } from './types';
/**
 * ChannelState - A container class for the channel state.
 */
export declare class ChannelState<AttachmentType extends UnknownType = UnknownType, ChannelType extends UnknownType = UnknownType, CommandType extends string = LiteralStringForUnion, EventType extends UnknownType = UnknownType, MessageType extends UnknownType = UnknownType, ReactionType extends UnknownType = UnknownType, UserType extends UnknownType = UnknownType> {
    _channel: Channel<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>;
    watcher_count: number;
    typing: Record<string, Event<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>>;
    read: Record<string, {
        last_read: Date;
        user: UserResponse<UserType>;
    }>;
    messages: Array<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>>;
    pinnedMessages: Array<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>>;
    threads: Record<string, Array<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>>>;
    mutedUsers: Array<UserResponse<UserType>>;
    watchers: Record<string, UserResponse<UserType>>;
    members: Record<string, ChannelMemberResponse<UserType>>;
    unreadCount: number;
    membership: ChannelMembership<UserType>;
    last_message_at: Date | null;
    /**
     * Flag which indicates if channel state contain latest/recent messages or no.
     * This flag should be managed by UI sdks using a setter - setIsUpToDate.
     * When false, any new message (received by websocket event - message.new) will not
     * be pushed on to message list.
     */
    isUpToDate: boolean;
    constructor(channel: Channel<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>);
    /**
     * addMessageSorted - Add a message to the state
     *
     * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} newMessage A new message
     * @param {boolean} timestampChanged Whether updating a message with changed created_at value.
     * @param {boolean} addIfDoesNotExist Add message if it is not in the list, used to prevent out of order updated messages from being added.
     *
     */
    addMessageSorted(newMessage: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>, timestampChanged?: boolean, addIfDoesNotExist?: boolean): void;
    /**
     * formatMessage - Takes the message object. Parses the dates, sets __html
     * and sets the status to received if missing. Returns a message object
     *
     * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} message a message object
     *
     */
    formatMessage(message: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): FormatMessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>;
    /**
     * addMessagesSorted - Add the list of messages to state and resorts the messages
     *
     * @param {Array<MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} newMessages A list of messages
     * @param {boolean} timestampChanged Whether updating messages with changed created_at value.
     * @param {boolean} initializing Whether channel is being initialized.
     * @param {boolean} addIfDoesNotExist Add message if it is not in the list, used to prevent out of order updated messages from being added.
     *
     */
    addMessagesSorted(newMessages: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>[], timestampChanged?: boolean, initializing?: boolean, addIfDoesNotExist?: boolean): void;
    /**
     * addPinnedMessages - adds messages in pinnedMessages property
     *
     * @param {Array<MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} pinnedMessages A list of pinned messages
     *
     */
    addPinnedMessages(pinnedMessages: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>[]): void;
    /**
     * addPinnedMessage - adds message in pinnedMessages
     *
     * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} pinnedMessage message to update
     *
     */
    addPinnedMessage(pinnedMessage: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): void;
    /**
     * removePinnedMessage - removes pinned message from pinnedMessages
     *
     * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} message message to remove
     *
     */
    removePinnedMessage(message: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): void;
    addReaction(reaction: ReactionResponse<ReactionType, UserType>, message?: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>, enforce_unique?: boolean): MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> | undefined;
    _addOwnReactionToMessage(ownReactions: ReactionResponse<ReactionType, UserType>[] | null | undefined, reaction: ReactionResponse<ReactionType, UserType>, enforce_unique?: boolean): ReactionResponse<ReactionType, UserType>[];
    _removeOwnReactionFromMessage(ownReactions: ReactionResponse<ReactionType, UserType>[] | null | undefined, reaction: ReactionResponse<ReactionType, UserType>): ReactionResponse<ReactionType, UserType>[] | null | undefined;
    removeReaction(reaction: ReactionResponse<ReactionType, UserType>, message?: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> | undefined;
    removeQuotedMessageReferences(message: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): void;
    /**
     * Updates all instances of given message in channel state
     * @param message
     * @param updateFunc
     */
    _updateMessage(message: {
        id?: string;
        parent_id?: string;
        pinned?: boolean;
        show_in_channel?: boolean;
    }, updateFunc: (msg: ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>) => ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>): void;
    /**
     * Setter for isUpToDate.
     *
     * @param isUpToDate  Flag which indicates if channel state contain latest/recent messages or no.
     *                    This flag should be managed by UI sdks using a setter - setIsUpToDate.
     *                    When false, any new message (received by websocket event - message.new) will not
     *                    be pushed on to message list.
     */
    setIsUpToDate: (isUpToDate: boolean) => void;
    /**
     * _addToMessageList - Adds a message to a list of messages, tries to update first, appends if message isn't found
     *
     * @param {Array<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>>} messages A list of messages
     * @param message
     * @param {boolean} timestampChanged Whether updating a message with changed created_at value.
     * @param {string} sortBy field name to use to sort the messages by
     * @param {boolean} addIfDoesNotExist Add message if it is not in the list, used to prevent out of order updated messages from being added.
     */
    _addToMessageList(messages: Array<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>>, message: ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>, timestampChanged?: boolean, sortBy?: 'pinned_at' | 'created_at', addIfDoesNotExist?: boolean): FormatMessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>[];
    /**
     * removeMessage - Description
     *
     * @param {{ id: string; parent_id?: string }} messageToRemove Object of the message to remove. Needs to have at id specified.
     *
     * @return {boolean} Returns if the message was removed
     */
    removeMessage(messageToRemove: {
        id: string;
        parent_id?: string;
    }): boolean;
    removeMessageFromArray: (msgArray: Array<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']>>, msg: {
        id: string;
        parent_id?: string;
    }) => {
        removed: boolean;
        result: FormatMessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>[];
    };
    /**
     * Updates the message.user property with updated user object, for messages.
     *
     * @param {UserResponse<UserType>} user
     */
    updateUserMessages: (user: UserResponse<UserType>) => void;
    /**
     * Marks the messages as deleted, from deleted user.
     *
     * @param {UserResponse<UserType>} user
     * @param {boolean} hardDelete
     */
    deleteUserMessages: (user: UserResponse<UserType>, hardDelete?: boolean) => void;
    /**
     * filterErrorMessages - Removes error messages from the channel state.
     *
     */
    filterErrorMessages(): void;
    /**
     * clean - Remove stale data such as users that stayed in typing state for more than 5 seconds
     */
    clean(): void;
    clearMessages(): void;
}
//# sourceMappingURL=channel_state.d.ts.map