import { TextField, useControlled, type TextFieldProps } from "@mui/material"
import { Controller, useController, type Control, type RegisterOptions } from "react-hook-form";

type IMuiTextFieldProps = TextFieldProps & {
    name: string;
    control: Control<any, any>;
    shouldUnregister?: boolean;
    rules?: RegisterOptions<any, string>;
    disabled: boolean;
}
export function MuiTextField(props: IMuiTextFieldProps) {
    const { name, control, defaultValue, rules, shouldUnregister, variant, ...otherProps } = props
    return <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        shouldUnregister={shouldUnregister}
        render={({ field, fieldState }) => (
            <TextField
                variant={variant ?? "outlined"}
                {...field}
                inputRef={field.ref}
                helperText={fieldState.error?.message}
                error={fieldState.invalid}
                {...otherProps}
            />
        )} />
}

export function MuiTextFieldWithoutWrapper(props: IMuiTextFieldProps) {
    const { name, control, defaultValue, rules, shouldUnregister, variant, ...otherProps } = props

    const { field, fieldState } = useController({ name, control, defaultValue, rules, shouldUnregister })
    return <>
        <TextField
            variant={variant ?? "outlined"}
            {...field}
            inputRef={field.ref}
            helperText={fieldState.error?.message}
            error={fieldState.invalid}
            {...otherProps}
        />
    </>
}