import type { FormEvent } from "react"
import { useFormRefs } from "../../hooks/form/useFormRefs"

export const UncontrolledForm = () => {
    const fields = [{
        name: "name",
        type: "text",
    },
    {
        name: "age",
        type: "number",
    }]
    const refs = useFormRefs(fields.map(field => field.name))
    function submitHandler(event: FormEvent) {
        event.preventDefault()
    }
    return (
        <form onSubmit={submitHandler}>
            {fields.map(field => <input type={field.type} name={field.name} key={field.name} ref={refs[field.name]} />)}
            <input type={"submit"} value={"Submit"} />
        </form>
    )
}