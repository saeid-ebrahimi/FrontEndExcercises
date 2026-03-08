import { forwardRef, type InputHTMLAttributes, type ForwardedRef } from 'react'
import { type FieldError } from 'react-hook-form';

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError
}
export const TextField = forwardRef((props: ITextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", className = "", placeholder = "Enter text please", label, name, error, ...rest } = props
    return (
        <div className={label ? "form-floating" : ""}>
            <input name={name} type={type} ref={ref} className={`form-control ${className}`} placeholder={placeholder} {...rest} />
            {label && <label htmlFor={name}>{label}</label>}
            {error && <div className={"error-feedback"}>{error.message}</div>}
        </div>
    )
})
