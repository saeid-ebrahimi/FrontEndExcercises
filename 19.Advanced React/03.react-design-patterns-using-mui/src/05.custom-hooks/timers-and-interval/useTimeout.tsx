"use client";

import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay === null) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            savedCallback.current();
        }, delay);

        return () => {
            window.clearTimeout(timeoutId);
        }
    }, [delay])
}