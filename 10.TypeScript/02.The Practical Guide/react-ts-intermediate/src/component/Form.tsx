// add useref to Form
import {type FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
    onSave : (value: unknown) => void;
}

export type FormHandle = {
    clear: () => void;
}
const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log("clearing");
                formRef.current?.reset();
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }
    
    return <form {...otherProps} onSubmit={handleSubmit} ref={formRef}>
        {children} 
    </form>
})

export default Form;