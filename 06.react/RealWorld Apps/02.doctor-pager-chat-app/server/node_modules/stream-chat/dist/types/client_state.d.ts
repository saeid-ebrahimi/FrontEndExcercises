import { UnknownType, UserResponse } from './types';
/**
 * ClientState - A container class for the client state.
 */
export declare class ClientState<UserType = UnknownType> {
    users: {
        [key: string]: UserResponse<UserType>;
    };
    userChannelReferences: {
        [key: string]: {
            [key: string]: boolean;
        };
    };
    constructor();
    updateUsers(users: UserResponse<UserType>[]): void;
    updateUser(user?: UserResponse<UserType>): void;
    updateUserReference(user: UserResponse<UserType>, channelID: string): void;
    deleteAllChannelReference(channelID: string): void;
}
//# sourceMappingURL=client_state.d.ts.map