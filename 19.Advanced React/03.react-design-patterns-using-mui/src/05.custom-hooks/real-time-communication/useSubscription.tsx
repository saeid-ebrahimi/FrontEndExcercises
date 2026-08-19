import { useEffect, useState } from "react";

type TUnsubscribe = () => void;

type TSubscribe<T> = (
    callback: (value: T) => void
) => TUnsubscribe;

export function useSubscription<T>(
    subscribe: TSubscribe<T>,
    initialValue: T
) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        const handleValue = (value: T) => {
            setValue(value);
        };

        const unsubscribe = subscribe(handleValue);

        return unsubscribe;
    }, [subscribe]);

    return value;
}