import { useFormContext, useFormState } from "react-hook-form";
import { TextField } from "../../../components/controls/TextField";
import type { TFoodDeliveryMasterFormData } from "../../../types";
import { getRenderCount } from "../../../lib/getRenderCount";

const RenderCount = getRenderCount("FoodDeliveryMasterForm")

export function FoodDeliveryMasterForm() {
    const { register } = useFormContext<TFoodDeliveryMasterFormData>()
    const { errors } = useFormState<TFoodDeliveryMasterFormData>({
        name: ["orderNumber",
            "customerName",
            "mobile",
            "email",],
        exact: true,
    })
    return (
        <>
            <RenderCount />
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
        </>
    )
}
