import axios from "axios";
import { useState, useEffect } from "react";

type TUseFetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

export function useFetch<T>(url: string): TUseFetchResult<T> {
    const [data, setDate] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get<T>(url, { signal: controller.signal });
                setDate(response.data);
            } catch (error) {
                let message = `error in getting data from "${url}"`
                if (error !== axios.isCancel(error) && (error instanceof Error || axios.isAxiosError(error))) {
                    message = error.message
                }
                const err = new Error(message);
                setError(err)
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort();

    }, [url])

    return {
        data,
        loading,
        error
    };
}