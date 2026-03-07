import { useFormContext, useFormState } from "react-hook-form"
import { SelectField } from "../../../components/controls/SelectField"
import type { TCheckoutFormData } from "../../../types"
// import { getRenderCount } from "../../../lib/getRenderCount"

// const RenderCount = getRenderCount("CheckoutForm")

export const CheckoutForm = () => {
    const { register } = useFormContext<TCheckoutFormData>()
    const { errors } = useFormState<TCheckoutFormData>(
        {
            name: ["deliveryIn", "paymentMethod"],
            exact: true,
            // disabled:true,
        })

    const paymentOptions = [
        { value: "", label: "Select a Method" },
        { value: "Online", label: "Paid Online" },
        { value: "COD", label: "Cash on Delivery" },
    ]

    const deliveryInOptions = [
        { value: 0, label: "In Minute" },
        { value: 30, label: "Half an Hour" },
        { value: 60, label: "1 Hour" },
        { value: 120, label: "2 Hours" },
        { value: 180, label: "3 Hours" },
    ]

    return (
        <>
            {/* <RenderCount /> */}
            <div className="text-start fw-bold mt-4 mb-4">
                Checkout Details
            </div>
            <div className="row mb-4">
                <div className="col">
                    <SelectField
                        label="Payment Method"
                        options={paymentOptions}
                        {...register("paymentMethod",
                            {
                                required: {
                                    value: true,
                                    message: "Select an Payment Method"
                                }
                            }
                        )}
                        error={errors.paymentMethod}
                    />
                </div>
                <div className="col">
                    <SelectField
                        label="Delivery Within"
                        options={deliveryInOptions}
                        {...register("deliveryIn", {
                            required: {
                                value: true,
                                message: "Select a Delivery Time"
                            }
                        })}
                        error={errors.deliveryIn}
                    />
                </div>
            </div>
        </>
    )
}