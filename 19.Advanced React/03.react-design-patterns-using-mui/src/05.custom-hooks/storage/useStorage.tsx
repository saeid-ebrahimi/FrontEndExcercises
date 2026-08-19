import { useEffect, useState } from "react";

type TStorageType = "localStorage" | "sessionStorage";

function getStorage(type: TStorageType): Storage | null {
    if (typeof window === "undefined") {
        return null;
    }

    return type === "localStorage" ? window.localStorage : window.sessionStorage;
}

export function useStorage<T>(
    key: string,
    initialValue: T,
    storageType: TStorageType
) {
    const [value, setValue] = useState<T>(() => {
        const storage = getStorage(storageType);
        if (!storage) {
            return initialValue;
        }
        try {
            const storedValue = storage.getItem(key);
            return storedValue !== null ? JSON.stringify(storedValue) as T : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        const storage = getStorage(storageType);

        if (!storage) {
            return;
        }

        try {
            storage.setItem(
                key,
                JSON.stringify(value)
            );
        } catch (error) {
            console.error(
                `Failed to save "${key}" to ${storageType}`,
                error
            );
        }
    }, [key, value, storageType]);

    const remove = () => {
        const storage = getStorage(storageType);

        storage?.removeItem(key);
        setValue(initialValue);
    };

    return {
        value,
        setValue,
        remove,
    };
}