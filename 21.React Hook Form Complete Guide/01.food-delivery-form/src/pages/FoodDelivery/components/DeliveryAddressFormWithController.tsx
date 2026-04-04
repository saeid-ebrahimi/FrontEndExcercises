import { Controller, useFormContext, useFormState } from "react-hook-form"
import type { TDeliveryAddressFormData } from "../../../types"
import { FormControl, TextField } from "@mui/material"

// const RenderCount = getRenderCount("DeliveryAddressForm")

export function DeliveryAddressFormWithController() {
    const {
        control,
    } = useFormContext<{ address: TDeliveryAddressFormData }>()

    const {
        isSubmitting
    } = useFormState<{ address: TDeliveryAddressFormData }>({ name: "address", exact: true })

    return <>
        {/* <RenderCount /> */}
        <div className="text-start fw-bold mt-4 mb-4">
            Delivery Address
        </div>
        <div className={"row mb-4"}>
            <div className="col">
                <Controller
                    name={"address.streetAddress"}
                    control={control}
                    exact={true}
                    rules={{
                        required: "street address is required!"
                    }}
                    render={({ field, fieldState }) =>
                        <>
                            <FormControl fullWidth error={!!fieldState.error}>
                                <TextField
                                    label={"Street Address"}
                                    placeholder={"enter street address"}
                                    disabled={isSubmitting}
                                    helperText={fieldState.error?.message}
                                    {...field} />
                            </FormControl>
                        </>}
                />
            </div>
            <div className="col">
                <Controller
                    name={"address.city"}
                    control={control}
                    exact={true}
                    rules={{
                        required: "city is required!"
                    }}
                    render={({ field, fieldState }) => (
                        <>
                            <FormControl fullWidth={true} error={!!fieldState.error}>
                                <TextField
                                    disabled={isSubmitting}
                                    label={"City"}
                                    placeholder={"enter city"}
                                    helperText={fieldState.error?.message}
                                    {...field}
                                />
                            </FormControl>
                        </>
                    )}
                />
            </div>
        </div>
        <div className={"row mb-4"}>
            <div className="col">
                <Controller
                    name={"address.landmark"}
                    control={control}
                    exact={true}
                    render={({ field, fieldState }) => <>
                        <FormControl
                            fullWidth={true}
                            error={!!fieldState.error}>
                            <TextField
                                disabled={isSubmitting}
                                label={"Landmark"}
                                placeholder={"enter landmark"}
                                helperText={fieldState.error?.message}
                                {...field}
                            />
                        </FormControl>
                    </>}
                />
            </div>
            <div className="col">
                <Controller
                    name={"address.state"}
                    control={control}
                    exact={true}
                    render={(({ field, fieldState }) => <>
                        <FormControl fullWidth error={!!fieldState.error}>
                            <TextField
                                disabled={isSubmitting}
                                label={"State"}
                                placeholder={"enter state"}
                                helperText={fieldState.error?.message}
                                {...field}
                            />
                        </FormControl>
                    </>)}
                />
            </div>
        </div>
    </>
}