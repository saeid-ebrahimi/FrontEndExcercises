import { useState, type ChangeEvent, type SyntheticEvent } from 'react'

type FoodDeliveryFormType = {
    customerName: string;
    mobile: string;
}
type FoodDeliveryFormErrorType = {
    customerName: string;
    mobile: string;
}
export function FoodDeliveryForm() {
    const [values, setValues] = useState<FoodDeliveryFormType>({
        customerName: "",
        mobile: "",
    })

    const [errors, setErrors] = useState<FoodDeliveryFormErrorType>({
        customerName: "",
        mobile: ""
    })

    const validateFormData = () => {
        let currentErrors: FoodDeliveryFormErrorType = {
            customerName: "",
            mobile: ""
        }

        if (values.customerName.trim() === "") {
            currentErrors.customerName = "Customer name is required!"
        }
        if (values.mobile.trim() === "") {
            currentErrors.mobile = "Mobile is required!"
        }
        setErrors(currentErrors)
        return Object.values(currentErrors).every(element => element = "")
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name: fieldName, value } = e.target;
        setValues({ ...values, [fieldName]: value })
    }

    const onSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
        evt.preventDefault()
        if (!validateFormData())
            return;
        console.log(evt.target);

    }

    return (
        <form autoComplete={"off"} onSubmit={onSubmit}>
            <div className={"form-floating mb-3"}>
                <input onChange={handleChangeInput}
                    name={"customerName"}
                    value={values.customerName}
                    id={"customerName"}
                    type={"text"}
                    className={"form-control"}
                    placeholder={"John Doe"}
                />

                <label htmlFor={"customerName"}>Customer Name:</label>
            </div>
            <p className={"text-danger"}>{errors.customerName}</p>
            <div className={"form-floating mb-3"}>
                <input
                    onChange={handleChangeInput}
                    name={"mobile"}
                    id={"mobile"}
                    type={"text"}
                    className={"form-control"}
                    placeholder={"09xx-xxx-xx-xx"}
                />
                <label htmlFor="mobile">Mobile:</label>
            </div>
            <p className={"text-danger"}>{errors.mobile}</p>
            <button type={"submit"} className={"btn btn-primary"}>Submit</button>
        </form>
    )
}
