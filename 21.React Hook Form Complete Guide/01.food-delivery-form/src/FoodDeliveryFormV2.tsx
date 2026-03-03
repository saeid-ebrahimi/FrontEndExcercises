import { useForm } from "react-hook-form"

type TFoodDeliveryFormData = {
    orderNumber: number;
    customerName: string;
    mobile: string;
    email: string;
}

export function FoodDeliveryForm() {
    const { register, handleSubmit } = useForm<TFoodDeliveryFormData>({
        defaultValues: {
            orderNumber: new Date().valueOf(),
            customerName: "",
            mobile: "",
            email: ""
        }
    })

    const onSubmit = (formData: TFoodDeliveryFormData) => {
        console.log("form data", formData);

    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-4">
                <div className="col">
                    <div className="form-floating">
                        <input type={"text"}
                            className={"form-control"}
                            placeholder={"Order number"}
                            {...register("orderNumber", {
                                required: "Order number is required!"
                            })} />
                        <label htmlFor={"orderNumber"}>Order Number:</label>
                    </div>
                </div>
                <div className={"col"}>
                    <div className="form-floating">
                        <input type={"text"}
                            className={"form-control"}
                            placeholder={"Mobile"}
                            {...register("mobile", {
                                required: "Mobile number is required!"
                            })} />
                        <label htmlFor={"mobile"}>Mobile Number:</label>
                    </div>
                </div>
            </div>
            <div className={"row mb-4"}>
                <div className="col">
                    <div className="form-floating">
                        <input type={"text"}
                            className={"form-control"}
                            placeholder={"Customer Name"}
                            {...register("customerName", {
                                required: "Customer name is required!"
                            })} />
                        <label htmlFor={"customerName"}>Customer Name:</label>
                    </div>
                </div>
                <div className={"col"}>
                    <div className="form-floating">
                        <input type={"text"}
                            className={"form-control"}
                            placeholder={"Email"}
                            {...register("email", {
                                required: "email number is required!"
                            })}
                        />
                        <label htmlFor={"email"}>Mobile Number:</label>
                    </div>
                </div>
            </div>
            <button type={"submit"} className={"btn btn-primary"}>Submit Order</button>
        </form>
    </>
}