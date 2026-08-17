import { useState, useEffect, useCallback } from "react";

// Helper 1: Extract a specific cookie by name
const getCookie = (name: string): string | null => {
    if (typeof document === "undefined") return null;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
};

// Helper 2: Decode the JWT payload to get user data
const parseJwt = (token: string) => {
    try {
        // JWTs are base64-encoded strings split by periods
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        )
        return JSON.parse(jsonPayload);
    } catch {
        return null;
    }
};

interface IUser {
    permissions: string[];
    role: string;
}
// Note: this is not the best approach to read cookie for auth using context api and HttpOnly cookies are the best 
export const useAuth = <T extends IUser>() => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<T | null>(null);

    const loadAuth = useCallback(() => {
        const authCookie = getCookie("authToken");

        setToken(authCookie)
        if (authCookie) {
            setUser(parseJwt(authCookie));
        } else {
            setUser(null);
        }
    }, [])

    useEffect(() => {
        loadAuth()
    }, [loadAuth]);

    // Login writes the cookie and updates the hook's state
    const login = (newToken: string) => {
        // Basic cookie setting. In production, consider adding 'Secure' and 'SameSite=Strict'
        document.cookie = `authToken=${newToken}; path=/; max-age=86400;`;
        loadAuth();
    };

    // Logout expires the cookie instantly
    const logout = () => {
        document.cookie = `authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        loadAuth();
    };

    return {
        user,
        token,
        isAuthenticated: !!token,
        login,
        logout
    };
}