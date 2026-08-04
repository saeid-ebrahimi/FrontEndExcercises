import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { TUser } from "./user-info";
import { Typography } from "@mui/material";

export function UserLoader({ userId, children }: { userId: number; children: (user: TUser) => ReactNode; }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/users/${userId}`);
            setUser(response.data)
        })()
    }, [userId])

    if (!user) return <div>Loading...</div>;
    return <>{children(user)}</>;
}


export function UserLoader2({ userId, children }: { userId: number, children: (user: TUser) => ReactNode }) {
    const [user, setUser] = useState<TUser | null>(null)
    const [fetchCondition, setFetchCondition] = useState<"loading" | "error" | "success">("loading");

    useEffect(() => {
        const controller = new AbortController();
        const getUserInfo = async () => {
            if (userId < 1) {
                setFetchCondition("error");
                return;
            }
            // 2. Reset to loading state if the URL changes
            setFetchCondition("loading");
            try {
                const response = await axios.get<TUser>(`/api/users/${userId}`, {
                    signal: controller.signal
                });
                setUser(response.data);
                setFetchCondition("success");
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request canceled");
                } else {
                    setFetchCondition("error");
                }
            }
        }
        getUserInfo();

        // 5. Cleanup function to abort the request
        return () => {
            controller.abort()
        }
    }, [userId])

    if (fetchCondition === "loading") {
        return <Typography color={"textSecondary"}>Loading...</Typography>
    } else if (fetchCondition === "error") {
        return <Typography color={"error"}>Error in getting data</Typography>
    } else if (fetchCondition === "success") {
        if (!user) {
            return <Typography color={"textSecondary"}>Cannot find the user...</Typography>
        }
        return <>
            {children(user)}
        </>
    }

    return <></>
}