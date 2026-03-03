import { useForm } from "react-hook-form";
import { getRenderCount } from "./lib/getRenderCount";

type TTypicalForm = {
    customerName: string;
    mobile: string;
}
const RenderCount = getRenderCount("Typical Form")
export function TypicalForm() {
    const { register, handleSubmit } = useForm<TTypicalForm>()

    // console.log(useForm())
    const customerControl = register('customerName', {
        value: "John",
        required: "Customer Name is required!"
    });

    const mobileControl = register("mobile", {
        required: "Mobile Number is required!"
    })

    console.log(customerControl)
    async function OnSubmit(formData: TTypicalForm) {
        console.log("form data", formData);

    }

    function OnError(errors: any) {
        console.log("validation error", errors)
    }



    return <>
        <RenderCount />
        <form autoComplete={"off"} onSubmit={handleSubmit(OnSubmit, OnError)}>
            <div className={"form-floating mb-3"}>
                <input type={"text"}
                    className={"form-control"}
                    placeholder={"Customer Name"}
                    name={customerControl.name}
                    ref={customerControl.ref}
                    onChange={customerControl.onChange}
                    onBlur={customerControl.onBlur}
                />
                <label htmlFor={"customerName"}>Customer Name</label>
            </div>
            <div className={"form-floating mb-3"}>
                <input type={"text"}
                    className={"form-control"}
                    placeholder={"Mobile"}
                    name={mobileControl.name}
                    ref={mobileControl.ref}
                    onChange={mobileControl.onChange}
                    onBlur={mobileControl.onBlur}
                />
                <label htmlFor={"mobile"}>Mobile</label>
            </div>
            <button type={"submit"} className={"btn btn-primary"}>Submit</button>
        </form>
    </>
}