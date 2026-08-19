import { useEffect, useState } from "react";

type TSSEStatus =
    | "CONNECTING"
    | "OPEN"
    | "CLOSED";

export function useSSE<T = unknown>(url: string) {
    const [status, setStatus] = useState<TSSEStatus>("CONNECTING");

    const [data, setData] = useState<T | null>(null);

    const [error, setError] = useState<Event | null>(null);

    useEffect(() => {
        const eventSource = new EventSource(url);
        eventSource.onopen = () => {
            setStatus("OPEN");
        }

        eventSource.onmessage = (event) => {
            try {
                const parsed = JSON.parse(event.data) as T;
                setData(parsed);
            } catch {
                setData(event.data as T);
            }
        }

        eventSource.onerror = (event) => {
            setError(event);
            setStatus("CLOSED");
        };

        return () => {
            eventSource.close();
        }
    }, [url])

    return {
        status,
        data,
        error,
    };
}
