import { useForm, type FieldErrors } from "react-hook-form"
import { TextField } from "./components/controls/TextField";
import { CheckoutForm } from "./CheckoutForm";

type TFoodDeliveryFormData = {
    orderNumber: number;
    customerName: string;
    mobile: string;
    email: string;
    paymentMethod: string;
    deliveryIn: number;
    address: {
        streetAddress: string;
        landmark: string;
        city: string;
        state: string;
    }
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
            email: "",
            paymentMethod: "",
            deliveryIn: 0,
            address: {
                streetAddress: "",
                landmark: "",
                city: "",
                state: "",
            }
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
                </div>
            </div>
            <div>List of ordered food items</div>
            <CheckoutForm />
            <div className="text-start fw-bold mt-4 mb-4">
                Delivery Address
            </div>
            <div className={"row mb-4"}>
                <div className="col">
                    <TextField
                        label={"Street Address:"}
                        placeholder={"enter street address"}
                        error={errors.address?.streetAddress}
                        {...register("address.streetAddress", {
                            required: "Street Address is required!"
                        })}
                    />
                </div>
                <div className="col">
                    <TextField
                        label={"City:"}
                        placeholder={"enter city"}
                        error={errors.address?.city}
                        {...register("address.city", {
                            required: "city is required!"
                        })}
                    />
                </div>
            </div>
            <div className={"row mb-4"}>
                <div className="col">
                    <TextField
                        label={"Landmark:"}
                        placeholder={"enter landmark"}
                        error={errors.address?.landmark}
                        {...register("address.landmark")}
                    />
                </div>
                <div className="col">
                    <TextField
                        label={"State:"}
                        placeholder={"enter state"}
                        error={errors.address?.state}
                        {...register("address.state")}
                    />
                </div>
            </div>
            <button type={"submit"} className={"btn btn-primary"}>Submit Order</button>
        </form>
    </>
}