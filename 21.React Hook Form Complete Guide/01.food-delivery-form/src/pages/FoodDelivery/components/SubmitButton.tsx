
import type { ButtonHTMLAttributes } from "react";

interface ISubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isSubmitting?: boolean;
    text?: string
}
export function SubmitButton(props: ISubmitButtonProps) {
    const { isSubmitting, className = "btn-light", text, ...rest } = props
    return <button className={`btn ${className}`} disabled={isSubmitting} {...rest}>
        {!!isSubmitting && <span className={"spinner-border spinner-border-sm"} aria-hidden={true} />}
        {!!isSubmitting ? <span role={"status"}>Loading...</span> :
            (text ?? "Submit")
        }
    </button>
}