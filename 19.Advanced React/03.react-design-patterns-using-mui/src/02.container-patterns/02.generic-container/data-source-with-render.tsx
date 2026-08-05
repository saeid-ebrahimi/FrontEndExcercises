import { Typography } from "@mui/material";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

export function DataSourceWithRender<T>(
    { getFn, render }: { getFn?: () => T | Promise<T>; render: (prop: T) => ReactNode; }
) {
    const [resource, setResource] = useState<T>()
    useEffect(() => {
        (async () => {
            let data;
            if (getFn) {
                data = await getFn();
            }
            setResource(data)
        })();
    }, [getFn])

    if (!resource) return <div>Loading...</div>;
    return <>{render(resource)}</>;
}

export function DataSourceWithRender2<T>({ getFn, render }: { getFn?: () => Promise<T>; render: (prop: T) => ReactNode }) {
    const [resource, setResource] = useState<T | null>(null);
    const [fetchCondition, setFetchCondition] = useState<"loading" | "error" | "success">("loading");

    useEffect(() => {
        const controller = new AbortController();
        const getResource = async () => {
            let data;
            try {
                if (getFn) {
                    setFetchCondition("loading")
                    data = await getFn();
                    setResource(data);
                    setFetchCondition("success");
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("Request canceled");
                } else {
                    setFetchCondition("error")
                }
            }

        }
        getResource()

        return () => {
            controller.abort()
        }
    }, [])

    if (fetchCondition === "loading") {
        return <Typography color={"textSecondary"}>Loading...</Typography>
    } else if (fetchCondition === "error") {
        return <Typography color={"error"}>Error in getting data</Typography>
    } else if (fetchCondition === "success") {
        if (!resource) {
            return <Typography color={"textSecondary"}>Cannot find the resource...</Typography>
        }
        return <>
            {render(resource)}
        </>
    }

    return <></>
}