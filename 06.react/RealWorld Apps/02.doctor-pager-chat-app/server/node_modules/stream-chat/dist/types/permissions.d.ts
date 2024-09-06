import { PermissionObject } from './types';
declare type RequiredPermissionObject = Required<PermissionObject>;
export declare const Allow = "Allow";
export declare const Deny = "Deny";
export declare const AnyResource: string[];
export declare const AnyRole: string[];
export declare const MaxPriority = 999;
export declare const MinPriority = 1;
export declare class Permission {
    name: RequiredPermissionObject['name'];
    action: RequiredPermissionObject['action'];
    owner: RequiredPermissionObject['owner'];
    priority: RequiredPermissionObject['priority'];
    resources: RequiredPermissionObject['resources'];
    roles: RequiredPermissionObject['roles'];
    constructor(name: string, priority: number, resources?: string[], roles?: string[], owner?: boolean, action?: RequiredPermissionObject['action']);
}
export declare const AllowAll: Permission;
export declare const DenyAll: Permission;
export declare type Role = 'admin' | 'user' | 'guest' | 'anonymous' | 'channel_member' | 'channel_moderator' | string;
export declare const BuiltinRoles: {
    Admin: string;
    Anonymous: string;
    ChannelMember: string;
    ChannelModerator: string;
    Guest: string;
    User: string;
};
export declare const BuiltinPermissions: {
    AddLinks: string;
    BanUser: string;
    CreateChannel: string;
    CreateMessage: string;
    CreateReaction: string;
    DeleteAnyAttachment: string;
    DeleteAnyChannel: string;
    DeleteAnyMessage: string;
    DeleteAnyReaction: string;
    DeleteOwnAttachment: string;
    DeleteOwnChannel: string;
    DeleteOwnMessage: string;
    DeleteOwnReaction: string;
    ReadAnyChannel: string;
    ReadOwnChannel: string;
    RunMessageAction: string;
    UpdateAnyChannel: string;
    UpdateAnyMessage: string;
    UpdateMembersAnyChannel: string;
    UpdateMembersOwnChannel: string;
    UpdateOwnChannel: string;
    UpdateOwnMessage: string;
    UploadAttachment: string;
    UseFrozenChannel: string;
};
export {};
//# sourceMappingURL=permissions.d.ts.map