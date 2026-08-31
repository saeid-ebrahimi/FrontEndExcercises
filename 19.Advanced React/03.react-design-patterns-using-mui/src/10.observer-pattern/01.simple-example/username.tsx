import { useEffect, useState } from "react";
import { userObservable } from "./observable-instance";
import { Typography } from "@mui/material";

// it's Observer
export function Username() {
    const [name, setName] = useState("");
    useEffect(() => {
        const unsubscribe = userObservable.subscribe((newName) => {
            setName(newName)
        })

        return unsubscribe;
    }, []);

    return <Typography>User: {name}</Typography>
}