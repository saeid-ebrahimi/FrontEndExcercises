import {
    type Dispatch,
    type SetStateAction,
    useEffect,
    useState,
} from "react";

import { useSearchParams } from "react-router-dom";

export function useSearchParamsState<T extends string>(
    key: string,
    initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {

    const [searchParams, setSearchParams] = useSearchParams();
    const urlValue = searchParams.get(key) ?? initialValue;
    const [value, setValue] = useState<T>(urlValue as T);

    useEffect(() => {
        const currentValue = searchParams.get(key) ?? initialValue;
        setValue(currentValue as T);
    }, [searchParams, key, initialValue])

    const updateValue: Dispatch<SetStateAction<T>> = (nextValue) => {
        setValue(prevValue => {
            const newValue = nextValue instanceof Function ? nextValue(prevValue) : nextValue;
            setSearchParams((previous) => {
                const next = new URLSearchParams(previous);
                if (newValue === initialValue || newValue === "") {
                    next.delete(key)
                } else {
                    next.set(key, newValue?.toString())
                }
                return next;
            });
            return newValue;
        });
    };

    return [value, updateValue]
}