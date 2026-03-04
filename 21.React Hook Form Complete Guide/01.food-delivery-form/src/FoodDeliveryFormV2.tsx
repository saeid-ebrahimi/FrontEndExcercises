import { useForm, type FieldErrors } from "react-hook-form"
import { TextField } from "./components/controls/TextField";

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
                    <TextField
                        placeholder={"Order number"}
                        label={"Order Number:"}
                        {...register("orderNumber", {
                            required: {
                                value: true,
                                message: "order number value is required!"
                            }
                        })}
                        error={errors.orderNumber}
                    />
                </div>
                <div className={"col"}>
                    <TextField
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
                        })
                        }
                        label={"Mobile Number:"}
                        error={errors.mobile}
                    />
                </div>
            </div>
            <div className={"row mb-4"}>
                <div className="col">
                    <TextField
                        label={"Customer Name:"}
                        placeholder={"Enter Customer Name"}
                        {...register("customerName", {
                            required: {
                                value: true,
                                message: "customer name is required!"
                            }
                        }
                        )}
                        error={errors.customerName}
                    />
                </div>
                <div className={"col"}>
                    <TextField
                        label={"Email:"}
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
                        error={errors.email}
                    />
                    {/* <div className="form-floating">
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
                    </div> */}
                </div>
            </div>
            <button type={"submit"} className={"btn btn-primary"}>Submit Order</button>
        </form>
    </>
}