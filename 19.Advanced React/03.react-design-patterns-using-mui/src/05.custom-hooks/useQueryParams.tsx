import { useSearchParams } from "react-router-dom";

export function useQueryParams() {
    const [searchParams, setSearchParams] = useSearchParams();

    const get = (key: string) => {
        return searchParams.get(key);
    };

    const set = (key: string, value: string) => {
        setSearchParams((previous) => {
            const next = new URLSearchParams(previous);
            next.set(key, value);
            return next
        })
    };

    const remove = (key: string) => {
        setSearchParams((previous) => {
            const next = new URLSearchParams(previous);
            next.delete(key);
            return next;
        })
    };

    const getAll = () => {
        return Object.fromEntries(searchParams.entries())
    }

    return {
        get,
        set,
        remove,
        getAll,
    };
}