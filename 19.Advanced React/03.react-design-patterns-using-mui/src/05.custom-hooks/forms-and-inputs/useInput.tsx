import { ChangeEvent, useState } from "react";

export function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue(initialValue);
    }

    return {
        value, onChange, reset, setValue
    };
}