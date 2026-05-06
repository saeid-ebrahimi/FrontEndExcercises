import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { TUser } from "./user-info";

export function UserLoader({ userId, children }: { userId: number; children: (user: TUser) => ReactNode; }) {
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/users/${userId}`);
            setUser(response.data)
        })()
    }, [userId])

    if (!user) return <div>Loading...</div>;
    return <>{children(user)}</>;
}