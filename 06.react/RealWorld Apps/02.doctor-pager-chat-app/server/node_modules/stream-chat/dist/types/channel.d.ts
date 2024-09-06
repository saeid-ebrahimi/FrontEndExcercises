/// <reference types="node" />
import { ChannelState } from './channel_state';
import { StreamChat } from './client';
import { APIResponse, BanUserOptions, ChannelAPIResponse, ChannelData, ChannelMemberAPIResponse, ChannelQueryOptions, ChannelResponse, DeleteChannelAPIResponse, Event, EventAPIResponse, EventHandler, EventTypes, FormatMessageResponse, GetMultipleMessagesAPIResponse, GetReactionsAPIResponse, GetRepliesAPIResponse, InviteOptions, LiteralStringForUnion, MarkReadOptions, Message, MessageFilters, MessageResponse, MuteChannelAPIResponse, PaginationOptions, PartialUpdateChannel, PartialUpdateChannelAPIResponse, QueryMembersOptions, Reaction, ReactionAPIResponse, SearchOptions, SearchAPIResponse, SendMessageAPIResponse, TruncateChannelAPIResponse, UnknownType, UpdateChannelAPIResponse, UserFilters, UserResponse, UserSort } from './types';
import { Role } from './permissions';
/**
 * Channel - The Channel class manages it's own state.
 */
export declare class Channel<AttachmentType extends UnknownType = UnknownType, ChannelType extends UnknownType = UnknownType, CommandType extends string = LiteralStringForUnion, EventType extends UnknownType = UnknownType, MessageType extends UnknownType = UnknownType, ReactionType extends UnknownType = UnknownType, UserType extends UnknownType = UnknownType> {
    _client: StreamChat<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>;
    type: string;
    id: string | undefined;
    data: ChannelData<ChannelType> | ChannelResponse<ChannelType, CommandType, UserType> | undefined;
    _data: ChannelData<ChannelType> | ChannelResponse<ChannelType, CommandType, UserType>;
    cid: string;
    listeners: {
        [key: string]: (string | EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>)[];
    };
    state: ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>;
    initialized: boolean;
    lastKeyStroke?: Date;
    lastTypingEvent: Date | null;
    isTyping: boolean;
    disconnected: boolean;
    /**
     * constructor - Create a channel
     *
     * @param {StreamChat<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} client the chat client
     * @param {string} type  the type of channel
     * @param {string} [id]  the id of the chat
     * @param {ChannelData<ChannelType>} data any additional custom params
     *
     * @return {Channel<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} Returns a new uninitialized channel
     */
    constructor(client: StreamChat<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>, type: string, id: string | undefined, data: ChannelData<ChannelType>);
    /**
     * getClient - Get the chat client for this channel. If client.disconnect() was called, this function will error
     *
     * @return {StreamChat<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>}
     */
    getClient(): StreamChat<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>;
    /**
     * getConfig - Get the configs for this channel type
     *
     * @return {Record<string, unknown>}
     */
    getConfig(): import("./types").ChannelConfigWithInfo<CommandType> | undefined;
    /**
     * sendMessage - Send a message to this channel
     *
     * @param {Message<AttachmentType, MessageType, UserType>} message The Message object
     * @param {{ skip_push?: boolean }} [options] Option object, {skip_push: true} to skip sending push notifications
     *
     * @return {Promise<SendMessageAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */
    sendMessage(message: Message<AttachmentType, MessageType, UserType>, options?: {
        skip_push?: boolean;
    }): Promise<SendMessageAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    sendFile(uri: string | NodeJS.ReadableStream | Buffer | File, name?: string, contentType?: string, user?: UserResponse<UserType>): Promise<import("./types").SendFileAPIResponse>;
    sendImage(uri: string | NodeJS.ReadableStream | File, name?: string, contentType?: string, user?: UserResponse<UserType>): Promise<import("./types").SendFileAPIResponse>;
    deleteFile(url: string): Promise<APIResponse>;
    deleteImage(url: string): Promise<APIResponse>;
    /**
     * sendEvent - Send an event on this channel
     *
     * @param {Event<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} event for example {type: 'message.read'}
     *
     * @return {Promise<EventAPIResponse<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>>} The Server Response
     */
    sendEvent(event: Event<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>): Promise<EventAPIResponse<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>>;
    /**
     * search - Query messages
     *
     * @param {MessageFilters<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> | string}  query search query or object MongoDB style filters
     * @param {{client_id?: string; connection_id?: string; query?: string; message_filter_conditions?: MessageFilters<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>}} options Option object, {user_id: 'tommaso'}
     *
     * @return {Promise<SearchAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} search messages response
     */
    search(query: MessageFilters<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> | string, options?: SearchOptions<MessageType> & {
        client_id?: string;
        connection_id?: string;
        message_filter_conditions?: MessageFilters<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>;
        query?: string;
    }): Promise<SearchAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * queryMembers - Query Members
     *
     * @param {UserFilters<UserType>}  filterConditions object MongoDB style filters
     * @param {UserSort<UserType>} [sort] Sort options, for instance [{created_at: -1}].
     * When using multiple fields, make sure you use array of objects to guarantee field order, for instance [{last_active: -1}, {created_at: 1}]
     * @param {{ limit?: number; offset?: number }} [options] Option object, {limit: 10, offset:10}
     *
     * @return {Promise<ChannelMemberAPIResponse<UserType>>} Query Members response
     */
    queryMembers(filterConditions: UserFilters<UserType>, sort?: UserSort<UserType>, options?: QueryMembersOptions): Promise<ChannelMemberAPIResponse<UserType>>;
    /**
     * sendReaction - Send a reaction about a message
     *
     * @param {string} messageID the message id
     * @param {Reaction<ReactionType, UserType>} reaction the reaction object for instance {type: 'love'}
     * @param {{ enforce_unique?: boolean, skip_push?: boolean }} [options] Option object, {enforce_unique: true, skip_push: true} to override any existing reaction or skip sending push notifications
     *
     * @return {Promise<ReactionAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */
    sendReaction(messageID: string, reaction: Reaction<ReactionType, UserType>, options?: {
        enforce_unique?: boolean;
        skip_push?: boolean;
    }): Promise<ReactionAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * deleteReaction - Delete a reaction by user and type
     *
     * @param {string} messageID the id of the message from which te remove the reaction
     * @param {string} reactionType the type of reaction that should be removed
     * @param {string} [user_id] the id of the user (used only for server side request) default null
     *
     * @return {Promise<ReactionAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */
    deleteReaction(messageID: string, reactionType: string, user_id?: string): Promise<ReactionAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * update - Edit the channel's custom properties
     *
     * @param {ChannelData<ChannelType>} channelData The object to update the custom properties of this channel with
     * @param {Message<AttachmentType, MessageType, UserType>} [updateMessage] Optional message object for channel members notification
     * @param {{ skip_push?: boolean }} [options] Option object, {skip_push: true} to skip sending push notifications
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    update(channelData?: Partial<ChannelData<ChannelType>> | Partial<ChannelResponse<ChannelType, CommandType, UserType>>, updateMessage?: Message<AttachmentType, MessageType, UserType>, options?: {
        skip_push?: boolean;
    }): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * updatePartial - partial update channel properties
     *
     * @param {PartialUpdateChannel<ChannelType>} partial update request
     *
     * @return {Promise<PartialUpdateChannelAPIResponse<ChannelType,CommandType, UserType>>}
     */
    updatePartial(update: PartialUpdateChannel<ChannelType>): Promise<PartialUpdateChannelAPIResponse<ChannelType, CommandType, UserType>>;
    /**
     * enableSlowMode - enable slow mode
     *
     * @param {number} coolDownInterval the cooldown interval in seconds
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    enableSlowMode(coolDownInterval: number): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * disableSlowMode - disable slow mode
     *
     * @return {Promise<UpdateChannelAPIResponse<ChannelType, AttachmentType, MessageType, ReactionType, UserType>>} The server response
     */
    disableSlowMode(): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * delete - Delete the channel. Messages are permanently removed.
     *
     * @return {Promise<DeleteChannelAPIResponse<ChannelType, CommandType, UserType>>} The server response
     */
    delete(): Promise<DeleteChannelAPIResponse<ChannelType, CommandType, UserType>>;
    /**
     * truncate - Removes all messages from the channel
     *
     * @return {Promise<TruncateChannelAPIResponse<ChannelType, CommandType, UserType>>} The server response
     */
    truncate(): Promise<TruncateChannelAPIResponse<ChannelType, CommandType, UserType>>;
    /**
     * acceptInvite - accept invitation to the channel
     *
     * @param {InviteOptions<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} [options] The object to update the custom properties of this channel with
     *
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    acceptInvite(options?: InviteOptions<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * rejectInvite - reject invitation to the channel
     *
     * @param {InviteOptions<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} [options] The object to update the custom properties of this channel with
     *
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    rejectInvite(options?: InviteOptions<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * addMembers - add members to the channel
     *
     * @param {{user_id: string, channel_role?: Role}[]} members An array of members to add to the channel
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    addMembers(members: string[] | {
        user_id: string;
        channel_role?: Role;
    }[], message?: Message<AttachmentType, MessageType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * addModerators - add moderators to the channel
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    addModerators(members: string[], message?: Message<AttachmentType, MessageType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * assignRoles - sets member roles in a channel
     *
     * @param {{channel_role: Role, user_id: string}[]} roles List of role assignments
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    assignRoles(roles: {
        channel_role: Role;
        user_id: string;
    }[], message?: Message<AttachmentType, MessageType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * inviteMembers - invite members to the channel
     *
     * @param {{user_id: string, channel_role?: Role}[]} members An array of members to invite to the channel
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    inviteMembers(members: {
        user_id: string;
        channel_role?: Role;
    }[] | string[], message?: Message<AttachmentType, MessageType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * removeMembers - remove members from channel
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    removeMembers(members: string[], message?: Message<AttachmentType, MessageType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * demoteModerators - remove moderator role from channel members
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    demoteModerators(members: string[], message?: Message<AttachmentType, MessageType, UserType>): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * _update - executes channel update request
     * @param payload Object Update Channel payload
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     * TODO: introduce new type instead of Object in the next major update
     */
    _update(payload: Object): Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * mute - mutes the current channel
     * @param {{ user_id?: string, expiration?: string }} opts expiration in minutes or user_id
     * @return {Promise<MuteChannelAPIResponse<ChannelType, CommandType, UserType>>} The server response
     *
     * example with expiration:
     * await channel.mute({expiration: moment.duration(2, 'weeks')});
     *
     * example server side:
     * await channel.mute({user_id: userId});
     *
     */
    mute(opts?: {
        expiration?: number;
        user_id?: string;
    }): Promise<MuteChannelAPIResponse<ChannelType, CommandType, UserType>>;
    /**
     * unmute - mutes the current channel
     * @param {{ user_id?: string}} opts user_id
     * @return {Promise<APIResponse>} The server response
     *
     * example server side:
     * await channel.unmute({user_id: userId});
     */
    unmute(opts?: {
        user_id?: string;
    }): Promise<APIResponse>;
    /**
     * muteStatus - returns the mute status for the current channel
     * @return {{ muted: boolean; createdAt: Date | null; expiresAt: Date | null }} { muted: true | false, createdAt: Date | null, expiresAt: Date | null}
     */
    muteStatus(): {
        createdAt: Date | null;
        expiresAt: Date | null;
        muted: boolean;
    };
    sendAction(messageID: string, formData: Record<string, string>): Promise<SendMessageAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * keystroke - First of the typing.start and typing.stop events based on the users keystrokes.
     * Call this on every keystroke
     * @see {@link https://getstream.io/chat/docs/typing_indicators/?language=js|Docs}
     * @param {string} [parent_id] set this field to `message.id` to indicate that typing event is happening in a thread
     */
    keystroke(parent_id?: string): Promise<void>;
    /**
     * stopTyping - Sets last typing to null and sends the typing.stop event
     * @see {@link https://getstream.io/chat/docs/typing_indicators/?language=js|Docs}
     * @param {string} [parent_id] set this field to `message.id` to indicate that typing event is happening in a thread
     */
    stopTyping(parent_id?: string): Promise<void>;
    /**
     * lastMessage - return the last message, takes into account that last few messages might not be perfectly sorted
     *
     * @return {ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['formatMessage']> | undefined} Description
     */
    lastMessage(): FormatMessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>;
    /**
     * markRead - Send the mark read event for this user, only works if the `read_events` setting is enabled
     *
     * @param {MarkReadOptions<UserType>} data
     * @return {Promise<EventAPIResponse<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType> | null>} Description
     */
    markRead(data?: MarkReadOptions<UserType>): Promise<EventAPIResponse<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType> | null>;
    /**
     * clean - Cleans the channel state and fires stop typing if needed
     */
    clean(): void;
    /**
     * watch - Loads the initial channel state and watches for changes
     *
     * @param {ChannelQueryOptions<ChannelType, CommandType, UserType>} options additional options for the query endpoint
     *
     * @return {Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */
    watch(options?: ChannelQueryOptions<ChannelType, CommandType, UserType>): Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * stopWatching - Stops watching the channel
     *
     * @return {Promise<APIResponse>} The server response
     */
    stopWatching(): Promise<APIResponse>;
    /**
     * getReplies - List the message replies for a parent message
     *
     * @param {string} parent_id The message parent id, ie the top of the thread
     * @param {PaginationOptions & { user?: UserResponse<UserType>; user_id?: string }} options Pagination params, ie {limit:10, id_lte: 10}
     *
     * @return {Promise<GetRepliesAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} A response with a list of messages
     */
    getReplies(parent_id: string, options: PaginationOptions & {
        user?: UserResponse<UserType>;
        user_id?: string;
    }): Promise<GetRepliesAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * getReactions - List the reactions, supports pagination
     *
     * @param {string} message_id The message id
     * @param {{ limit?: number; offset?: number }} options The pagination options
     *
     * @return {Promise<GetReactionsAPIResponse<ReactionType, UserType>>} Server response
     */
    getReactions(message_id: string, options: {
        limit?: number;
        offset?: number;
    }): Promise<GetReactionsAPIResponse<ReactionType, UserType>>;
    /**
     * getMessagesById - Retrieves a list of messages by ID
     *
     * @param {string[]} messageIds The ids of the messages to retrieve from this channel
     *
     * @return {Promise<GetMultipleMessagesAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} Server response
     */
    getMessagesById(messageIds: string[]): Promise<GetMultipleMessagesAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * lastRead - returns the last time the user marked the channel as read if the user never marked the channel as read, this will return null
     * @return {Date | null | undefined}
     */
    lastRead(): Date | null | undefined;
    _countMessageAsUnread(message: FormatMessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> | MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): boolean;
    /**
     * countUnread - Count of unread messages
     *
     * @param {Date | null} [lastRead] lastRead the time that the user read a message, defaults to current user's read state
     *
     * @return {number} Unread count
     */
    countUnread(lastRead?: Date | null): number;
    /**
     * countUnread - Count the number of unread messages mentioning the current user
     *
     * @return {number} Unread mentions count
     */
    countUnreadMentions(): number;
    /**
     * create - Creates a new channel
     *
     * @return {Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */
    create: () => Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * query - Query the API, get messages, members or other channel fields
     *
     * @param {ChannelQueryOptions<ChannelType, CommandType, UserType>} options The query options
     *
     * @return {Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} Returns a query response
     */
    query(options: ChannelQueryOptions<ChannelType, CommandType, UserType>): Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>;
    /**
     * banUser - Bans a user from a channel
     *
     * @param {string} targetUserID
     * @param {BanUserOptions<UserType>} options
     * @returns {Promise<APIResponse>}
     */
    banUser(targetUserID: string, options: BanUserOptions<UserType>): Promise<APIResponse>;
    /**
     * hides the channel from queryChannels for the user until a message is added
     * If clearHistory is set to true - all messages will be removed for the user
     *
     * @param {string | null} userId
     * @param {boolean} clearHistory
     * @returns {Promise<APIResponse>}
     */
    hide(userId?: string | null, clearHistory?: boolean): Promise<APIResponse>;
    /**
     * removes the hidden status for a channel
     *
     * @param {string | null} userId
     * @returns {Promise<APIResponse>}
     */
    show(userId?: string | null): Promise<APIResponse>;
    /**
     * unbanUser - Removes the bans for a user on a channel
     *
     * @param {string} targetUserID
     * @returns {Promise<APIResponse>}
     */
    unbanUser(targetUserID: string): Promise<APIResponse>;
    /**
     * shadowBan - Shadow bans a user from a channel
     *
     * @param {string} targetUserID
     * @param {BanUserOptions<UserType>} options
     * @returns {Promise<APIResponse>}
     */
    shadowBan(targetUserID: string, options: BanUserOptions<UserType>): Promise<APIResponse>;
    /**
     * removeShadowBan - Removes the shadow ban for a user on a channel
     *
     * @param {string} targetUserID
     * @returns {Promise<APIResponse>}
     */
    removeShadowBan(targetUserID: string): Promise<APIResponse>;
    /**
     * on - Listen to events on this channel.
     *
     * channel.on('message.new', event => {console.log("my new message", event, channel.state.messages)})
     * or
     * channel.on(event => {console.log(event.type)})
     *
     * @param {EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType> | EventTypes} callbackOrString  The event type to listen for (optional)
     * @param {EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} [callbackOrNothing] The callback to call
     */
    on(eventType: EventTypes, callback: EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>): {
        unsubscribe: () => void;
    };
    on(callback: EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>): {
        unsubscribe: () => void;
    };
    /**
     * off - Remove the event handler
     *
     */
    off(eventType: EventTypes, callback: EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>): void;
    off(callback: EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>): void;
    _handleChannelEvent(event: Event<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>): void;
    _callChannelListeners: (event: Event<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>) => void;
    /**
     * _channelURL - Returns the channel url
     *
     * @return {string} The channel url
     */
    _channelURL: () => string;
    _checkInitialized(): void;
    _initializeState(state: ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>): void;
    _disconnect(): void;
}
//# sourceMappingURL=channel.d.ts.map