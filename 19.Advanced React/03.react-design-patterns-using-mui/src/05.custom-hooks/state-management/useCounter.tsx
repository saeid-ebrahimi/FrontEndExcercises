import { useState, useCallback } from 'react';

export const useCounter = (initialValue: number = 0, min?: number, max?: number) => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount((prev) => (max !== undefined ? Math.min(max, prev + 1) : prev + 1));
    }, [max]);

    const decrement = useCallback(() => {
        setCount((prev) => (min !== undefined ? Math.max(min, prev - 1) : prev - 1));
    }, [min]);

    const reset = useCallback(() => setCount(initialValue), [initialValue]);

    return { count, increment, decrement, reset, setCount };
}