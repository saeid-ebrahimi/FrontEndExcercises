import { Typography } from "@mui/material";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

export function ResourceLoader<T>(
    { resourceUrl, children }:
        { resourceUrl: string; children: (resource: T) => ReactNode }
) {
    const [resource, setResource] = useState<T>()
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/${resourceUrl}`);
            setResource(response.data)
        })()
    }, [resourceUrl])

    if (!resource) return <div>Loading...</div>;
    return <>{children(resource)}</>;
}


export function ResourceLoader2<T>({ resourceUrl, children }: { resourceUrl: string; children: (resource: T) => ReactNode }) {
    const [resource, setResource] = useState<T | null>(null);
    const [fetchCondition, setFetchCondition] = useState<"loading" | "error" | "success">("loading");

    async function getResource(resourceUrl: string) {
        if (!resourceUrl) {
            setFetchCondition("error");
            return;
        }
        try {
            const response = await axios.get<T>(resourceUrl);
            setResource(response.data)
            setFetchCondition("success")
        } catch {
            setFetchCondition("error")
        }
    }

    useEffect(() => {
        (async () => {
            await getResource(resourceUrl)
        })()
    }, [resourceUrl])

    if (fetchCondition === "loading") {
        return <Typography color={"textSecondary"}>Loading...</Typography>
    } else if (fetchCondition === "error") {
        return <Typography color={"error"}>Error in getting data</Typography>
    } else if (fetchCondition === "success") {
        if (!resource) {
            return <Typography color={"textSecondary"}>Cannot find the resource...</Typography>
        }
        return <>
            {children(resource)}
        </>
    }

    return <></>
}