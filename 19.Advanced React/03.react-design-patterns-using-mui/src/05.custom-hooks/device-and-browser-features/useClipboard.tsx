"use client";

import { useState } from "react";

export function useClipboard() {
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const copy = async (text: string) => {
        try {
            setError(null);
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch (error) {
            setCopied(false);
            setError(error instanceof Error ? error : new Error("Failed to copy text"));
        }
    }

    const reset = () => {
        setCopied(false);
        setError(null);
    }
    return {
        copy,
        copied,
        error,
        reset
    }
}