
import type { ButtonHTMLAttributes } from "react";
import { useFormState, type Control } from "react-hook-form";

// const RenderCount = getRenderCount("Submit Button")
interface ISubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    control?: Control<any, any>
}
export function SubmitButton(props: ISubmitButtonProps) {
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

export function WithControl({
    className,
    text,
    control,
    ...rest
}: ISubmitButtonProps & { control: Control<any, any> }) {
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
}: Omit<ISubmitButtonProps, "control">) {
    return (
        <>
            <button className={`btn ${className}`}  {...rest}>
                {text ?? "Submit"}
            </button>
        </>
    )
}