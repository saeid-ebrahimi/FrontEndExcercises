import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { TUser } from "./user-info";
import { Typography } from "@mui/material";

export function CurrentUserLoader({ children }: { children: (user: TUser) => ReactNode; }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/current-user");
            setUser(response.data)
        })()
    }, [])

    if (!user) return <div>Loading...</div>;
    return <>{children(user)}</>;
}


export function CurrentUserLoader2({ children }: { children: (user: TUser) => ReactNode }) {
    const [user, setUser] = useState(null);
    const [fetchCondition, setFetchCondition] = useState<"loading" | "error" | "success">("loading");

    async function getCurrentUser() {
        try {
            const response = await axios.get("/api/currents-user");
            setFetchCondition("success")
            setUser(response.data)
        } catch {
            setFetchCondition("error")
            setUser(null);
        }
    }

    useEffect(() => {
        (async () => { await getCurrentUser() })();
    }, [])

    if (fetchCondition === "loading") {
        return <Typography color={"textSecondary"}>Loading...</Typography>
    }
    else if (fetchCondition === "error") {
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