import { useAuth } from "./useAuth";

export const useRole = () => {
    const { user } = useAuth();

    const hasRole = (role: string | string[]) => {
        if (!user) return false;

        // If checking an array of acceptable roles
        if (Array.isArray(role)) {
            return role.includes(user.role);
        }

        // If checking a single role
        return user.role === role;
    };

    return { hasRole, currentRole: user?.role };
};