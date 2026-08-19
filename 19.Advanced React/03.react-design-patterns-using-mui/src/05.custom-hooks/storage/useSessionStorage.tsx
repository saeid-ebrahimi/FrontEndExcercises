import { useStorage } from "./useStorage";

export function useSessionStorage<T>(
    key: string,
    initialValue: T
) {
    return useStorage(
        key,
        initialValue,
        "sessionStorage"
    );
}