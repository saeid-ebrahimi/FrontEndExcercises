import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timerId = window.setTimeout(() => {
            setDebouncedValue(value)
        }, delay);

        return () => {
            window.clearTimeout(timerId)
        }
    }, [value, delay])

    return debouncedValue
}