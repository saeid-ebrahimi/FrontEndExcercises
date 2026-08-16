import { ChangeEvent, FormEvent, useState } from "react";

type TValidator<T> = {
    [K in keyof T]?: (value: T[K], values: T) => string | undefined;
}

interface IUseFormOptions<T> {
    initialValues: T,
    validate?: TValidator<T>,
    onSubmit: (values: T) => Promise<void> | void;
}

export function useForm<T>({ initialValues, validate, onSubmit }: IUseFormOptions<T>) {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
    const [touched, setTouched] = useState<Partial<Record<keyof T, string>>>({});
    const [submitting, setSubmitting] = useState(false);

    const setValue = <K extends keyof T>(field: K, value: T[K]) => {
        setValues((prev) => ({ ...prev, [field]: value }))
    }


    const handleChange = <K extends keyof T>(field: K) => (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValue(field, event.target.value as T[K]);
    }

    const handleBlur = <K extends keyof T>(field: K) => {
        setTouched((previous) => ({ ...previous, [field]: true }));
        const validator = validate?.[field];
        if (validator) {
            const error = validator(values[field], values);
            setErrors((previous) => ({
                ...previous,
                [field]: error,
            }));
        }
    }

    const validateForm = () => {
        if (!validate) {
            return true;
        };

        const nextErrors: Partial<Record<keyof T, string>> = {};
        for (const field in validate) {
            const validator = validate[field];
            if (validator) {
                const error = validator(values[field], values);
                if (error) {
                    nextErrors[field] = error;
                }
            }
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }

    const handleSubmit = async (event?: FormEvent) => {
        event?.preventDefault();

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        try {
            setSubmitting(true);
            await onSubmit(values);
        } finally {
            setSubmitting(false);
        }
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    };

    return {
        values,
        errors,
        touched,
        submitting,
        setValue,
        handleChange,
        handleBlur,
        handleSubmit,
        reset,
    };
}