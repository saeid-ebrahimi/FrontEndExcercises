import { ChangeEvent, useState } from "react";

interface IUseFieldOptions {
    initialValue: string;
    validate?: (value: string) => string | undefined;
}

export function useField({
    initialValue,
    validate
}: IUseFieldOptions) {
    const [value, setValue] = useState(initialValue);
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (touched && validate) {
            setError(validate(newValue))
        }
    };

    const onBlur = () => {
        setTouched(true);
        if (validate) {
            setError(validate(value))
        }
    };

    const reset = () => {
        setValue(initialValue);
        setTouched(false);
        setError(undefined);
    };

    return {
        value,
        onChange,
        onBlur,
        touched,
        error,
        reset,
        setValue,
    };
}