import { Controller, useFormContext, useFormState, useWatch, } from "react-hook-form"
import type { TCheckoutFormData } from "../../../types"
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, } from "@mui/material"
// import { getRenderCount } from "../../../lib/getRenderCount"

// const RenderCount = getRenderCount("CheckoutForm")

export const CheckoutFormWithController = () => {
    const {
        control,
        // watch
        formState: { isSubmitting }
    } = useFormContext<TCheckoutFormData>()

    // it rerender all the form while changing payment method
    // const paymentMethod = watch("paymentMethod")

    // const paymentMethod = useWatch({ name: "paymentMethod", exact: true })

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


    // useEffect(() => {
    //     if (paymentMethod === "Online")
    //         alert("Please verify the payment")
    // }, [paymentMethod])
    return (
        <>
            {/* <RenderCount /> */}
            <div className="text-start fw-bold mt-4 mb-4">
                Checkout Details
            </div>
            <div className="row mb-4">
                <div className="col">
                    <Controller
                        name={"paymentMethod"}
                        control={control}
                        exact={true}
                        disabled={isSubmitting}
                        rules={{
                            required: {
                                value: true,
                                message: "Select an Payment Method"
                            }
                        }}
                        render={({ field, fieldState }) => <>
                            <FormControl fullWidth error={!!fieldState.error}>
                                <InputLabel id="paymentMethod">Payment Method</InputLabel>
                                <Select
                                    label={"Payment Method"}
                                    labelId={"paymentMethods"}
                                    color={"primary"}
                                    fullWidth
                                    {...field}
                                >
                                    {paymentOptions.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                    )}
                                </Select>
                                <FormHelperText>{fieldState.error?.message}</FormHelperText>
                            </FormControl>
                        </>}
                    />
                </div>
                <div className="col">
                    <Controller
                        name={"deliveryIn"}
                        control={control}
                        exact={true}
                        disabled={isSubmitting}
                        rules={{
                            required: {
                                value: true,
                                message: "Select a Delivery Time"
                            }
                        }}
                        render={({ field, fieldState }) => <>
                            <FormControl fullWidth={true} error={!!fieldState.error}>
                                <InputLabel id="deliveryIn">Delivery In</InputLabel>
                                <Select fullWidth label={"Delivery In"} labelId={"deliveryIn"} {...field} >
                                    {deliveryInOptions.map(option => <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>)}
                                </Select>
                            </FormControl>
                        </>}
                    />
                </div>
            </div>
        </>
    )
}