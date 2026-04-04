import type { ButtonHTMLAttributes } from "react";
import { useFormState, type Control } from "react-hook-form";

interface ISubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    control?: Control<any, any>;
}

export function FormButtonTest(props: ISubmitButtonProps) {
    const { className = "btn-light", control = undefined, text, ...rest } = props

    return <>
        {control ?
            <WithControl className={className} text={text} control={control} {...rest} /> :
            <WithoutControl className={className} text={text} {...rest} />}
    </>
}

function WithControl({
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

function WithoutControl({
    className,
    text,
    ...rest
}: Omit<ISubmitButtonProps, "control">) {
    return (
        <>
            <button className={`btn ${className}`} {...rest}>{text ?? "Submit"}</button>
        </>
    )
}