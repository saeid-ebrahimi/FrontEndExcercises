import { useStorage } from "./useStorage";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
) {
    return useStorage(
        key,
        initialValue,
        "localStorage"
    );
}