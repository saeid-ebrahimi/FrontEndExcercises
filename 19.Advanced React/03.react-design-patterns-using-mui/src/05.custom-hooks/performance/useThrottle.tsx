import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(
    value: T,
    interval: number
): T {
    const [throttledValue, setThrottledValue] = useState(value);

    const lastUpdated = useRef(0);

    useEffect(() => {
        const now = Date.now();
        const remaining = (interval * 1000) - (now - lastUpdated.current);

        if (remaining <= 0) {
            setThrottledValue(value);
            lastUpdated.current = now;
            return
        }

        const timeoutId = window.setTimeout(() => {
            setThrottledValue(value);
            lastUpdated.current = Date.now();
        }, remaining)

        return () => {
            window.clearTimeout(timeoutId);
        }
    }, [value, interval])

    return throttledValue;
}