
import type { ButtonHTMLAttributes } from "react";
import { useFormState, type Control, type FieldValues } from "react-hook-form";


// const RenderCount = getRenderCount("Submit Button")
interface ISubmitButtonProps<T extends FieldValues> extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    control?: Control<T, any, T>
}

export function SubmitButton<T extends FieldValues>(props: ISubmitButtonProps<T>) {
    const { className = "btn-light", control = undefined, text, ...rest } = props
    if (control)
        return <>
            {/* <RenderCount /> */}
            {control ?
                <WithControl className={className} control={control} text={text} {...rest} />
                :
                <WithoutControl className={className} text={text} {...rest} />
            }
        </>
}

export function WithControl<T extends FieldValues>({
    className,
    text,
    control,
    ...rest
}: ISubmitButtonProps<T> & { control: Control<T, any, T> }) {
    const { isSubmitting } = useFormState({ control })
    return (
        <>
            <button className={`btn ${className}`} disabled={isSubmitting} {...rest}>
                {!!isSubmitting && <span className={"spinner-border spinner-border-sm"} aria-hidden={true} />}
                {!!isSubmitting ? <span role={"status"}>Loading...</span> :
                    (text ?? "Submit")
                }
            </button>
        </>
    )
}

export function WithoutControl({
    className,
    text,
    ...rest
}: Omit<ISubmitButtonProps<FieldValues>, "control">) {
    return (
        <>
            <button className={`btn ${className}`}  {...rest}>
                {text ?? "Submit"}
            </button>
        </>
    )
}