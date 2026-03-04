import { forwardRef, type ForwardedRef, type SelectHTMLAttributes } from "react";
import { type FieldError } from "react-hook-form";
import type { TSelectOption } from "../../types";

interface ISelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    error?: FieldError;
    options: TSelectOption[];
}

export const SelectField = forwardRef((props: ISelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { className = "", label, error, name, options, ...rest } = props
    function optionIsString(value: TSelectOption) {
        return typeof value === "string"
    }
    return (
        <div className={"form-floating"}>
            <select className={`form-select ${className}`} ref={ref} {...rest} >
                {options.map((option, index) =>
                    <option
                        key={index}
                        value={optionIsString(option) ? option : option.value}
                    >
                        {optionIsString(option) ? option : option.label}
                    </option>)}
            </select>
            <label htmlFor={name}>{label}</label>
            {error && <div className={"error-feedback"}>{error.message}</div>}
        </div>
    )
})