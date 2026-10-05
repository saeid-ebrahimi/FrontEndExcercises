import { useEffect, useRef } from "react";

export function UserProfile({ userId, role }: { userId: number, role: string }) {
    const prevUserIdRef = useRef<number>(userId);
    const prevRoleRef = useRef<string>(role);

    // 2. useEffect runs AFTER render, so during render we hold the OLD values
    useEffect(() => {
        prevUserIdRef.current = userId;
        prevRoleRef.current = role;
    }, [userId, role]);


    const userChanged = prevUserIdRef.current !== userId;
    const roleChanged = prevRoleRef.current !== role;

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h3>User Profile</h3>
            <p><strong>Current Props:</strong> ID = {userId}, Role = {role}</p>
            <p><strong>Previous Props:</strong> ID = {prevUserIdRef.current}, Role = {prevRoleRef.current}</p>
            <div>
                {userChanged && <p>🔄 User ID was updated!</p>}
                {roleChanged && <p>⚠️ User Role was changed from "{prevRoleRef.current}" to "{role}"!</p>}
            </div>
        </div>
    )
}