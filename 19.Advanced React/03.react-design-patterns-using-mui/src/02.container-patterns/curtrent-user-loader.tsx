import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import { TUser } from "./user-info";

export function CurrentUserLoader({ children }: { children: (user: TUser) => ReactNode; }) {
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/current-user");
            setUser(response.data)
        })()
    }, [])

    if (!user) return <div>Loading...</div>;
    return <>{children(user)}</>;
}