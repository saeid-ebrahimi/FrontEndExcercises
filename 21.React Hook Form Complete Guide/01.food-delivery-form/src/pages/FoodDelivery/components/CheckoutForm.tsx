import { useFormContext, useFormState, useWatch } from "react-hook-form"
import { SelectField } from "../../../components/controls/SelectField"
import type { TCheckoutFormData } from "../../../types"
import { useEffect } from "react"
// import { getRenderCount } from "../../../lib/getRenderCount"

// const RenderCount = getRenderCount("CheckoutForm")

export const CheckoutForm = () => {
    const { register,
        // watch
    } = useFormContext<TCheckoutFormData>()
    const { errors } = useFormState<TCheckoutFormData>(
        {
            name: ["deliveryIn", "paymentMethod"],
            exact: true,
            // disabled:true,
        })

    // it rerender all the form while changing payment method
    // const paymentMethod = watch("paymentMethod")

    const paymentMethod = useWatch({ name: "paymentMethod", exact: true })

    // use this method if you don't use useFormContext
    // const paymentMethod = useWatch({ name: "paymentMethod", exact: true, control: control })

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


    useEffect(() => {
        if (paymentMethod === "Online")
            alert("Please verify the payment")
    }, [paymentMethod])
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