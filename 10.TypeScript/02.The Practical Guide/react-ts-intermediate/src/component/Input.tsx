// using forwardRef for Inputs
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input"> & ComponentPropsWithoutRef<"label">

const Input =  forwardRef<HTMLInputElement, InputProps>(
    function Input({ label, id, ...props }, ref) {
    return (
        <p>
            <label htmlFor={id} {...props}>{label}</label>
            <input id={id} {...props} ref={ref} name={id} />
        </p>
    )
}
)

export default Input;