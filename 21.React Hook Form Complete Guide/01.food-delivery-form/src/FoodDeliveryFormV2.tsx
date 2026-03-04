import { useForm, type FieldErrors } from "react-hook-form"

type TFoodDeliveryFormData = {
    orderNumber: number;
    customerName: string;
    mobile: string;
    email: string;
}

export function FoodDeliveryForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<TFoodDeliveryFormData>({
        mode: "onSubmit",
        shouldFocusError: true,
        // reValidateMode: "onSubmit",
        delayError: 100,
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

    const onError = (errors: FieldErrors) => {
        console.log(errors);

    }
    return <>
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="row mb-4">
                <div className="col">
                    <div className="form-floating">
                        <input type={"text"}
                            className={"form-control"}
                            placeholder={"Order number"}
                            {...register("orderNumber", {
                                required: {
                                    value: true,
                                    message: "order number value is required!"
                                }
                            })} />
                        <label htmlFor={"orderNumber"}>Order Number:</label>
                        {errors?.orderNumber?.message && <div className={"error-feedback"}>{errors?.orderNumber?.message}</div>}
                    </div>
                </div>
                <div className={"col"}>
                    <div className="form-floating">
                        <input type={"text"}
                            className={"form-control"}
                            placeholder={"Mobile"}
                            {...register("mobile", {
                                required: {
                                    value: true,
                                    message: "mobile number is required!"
                                },
                                minLength: {
                                    value: 10,
                                    message: "mobile field must be 10 characters"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "mobile field must be 10 characters"
                                }
                            })} />
                        <label htmlFor={"mobile"}>Mobile Number:</label>
                        {errors.mobile?.message && <div className={"error-feedback"}>{errors.mobile?.message}</div>}
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
                                required: {
                                    value: true,
                                    message: "customer name is required!"
                                }
                            })} />
                        <label htmlFor={"customerName"}>Customer Name:</label>
                        {errors.customerName?.message && <div className={"error-feedback"}>{errors.customerName?.message}</div>}
                    </div>
                </div>
                <div className={"col"}>
                    <div className="form-floating">
                        <input type={"text"}
                            className={"form-control"}
                            placeholder={"Email"}
                            {...register("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "incorrect email format entered"
                                },
                                validate: {
                                    notFake: (value) => value !== "email@gmail.com" || "the email is blocked",
                                    notFromBlacklistedDomain: (value) => (!value.endsWith(".ir") && !value.includes("@example")) || "this domain is blocked"
                                }
                            })}
                        />
                        <label htmlFor={"email"}>Email:</label>
                        {errors.email?.message && <div className={"error-feedback"}>{errors.email?.message}</div>}
                    </div>
                </div>
            </div>
            <button type={"submit"} className={"btn btn-primary"}>Submit Order</button>
        </form>
    </>
}