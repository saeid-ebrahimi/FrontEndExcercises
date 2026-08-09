import { Box, Typography } from "@mui/material";
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

    if (!resource) return <Box>Loading...</Box>;
    return <>{children(resource)}</>;
}


export function ResourceLoader2<T>({ resourceUrl, children }: { resourceUrl: string; children: (resource: T) => ReactNode }) {
    const [resource, setResource] = useState<T | null>(null);
    const [fetchCondition, setFetchCondition] = useState<"loading" | "error" | "success">("loading");

    useEffect(() => {
        const controller = new AbortController();

        const getResource = async () => {
            if (!resourceUrl) {
                setFetchCondition("error");
                return;
            }
            try {
                const response = await axios.get<T>(`/api/${resourceUrl}`, {
                    signal: controller.signal,
                });
                console.log("ResourceLoader2: data fetched successfully", response.data);
                setResource(response.data)
                setFetchCondition("success")
            } catch (error) {
                if (axios.isCancel(error)) {
                    // console.log("Request canceled");
                    return;
                } else {
                    setFetchCondition("error");
                }
            }
        }
        getResource();

        // 5. Cleanup function to abort the request
        return () => {
            controller.abort();
        }
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