import { useAuth } from "./useAuth";

export const usePermissions = () => {
    const { user } = useAuth();

    const hasPermission = (permission: string) => {
        if (!user || !user.permissions) return false;
        return user.permissions.includes(permission);
    }

    const hasAllPermissions = (requiredPermissions: string[]) => {
        if (!user || !user.permissions) return false;
        return requiredPermissions.every(p => user.permissions.includes(p));
    };

    return { hasPermission, hasAllPermissions };
}