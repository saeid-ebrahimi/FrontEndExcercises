import { useFormContext, useFormState } from "react-hook-form"
import type { TDeliveryAddressFormData } from "../../../types"
import { TextField } from "../../../components/controls/TextField"

// const RenderCount = getRenderCount("DeliveryAddressForm")

export function DeliveryAddressForm() {
    const { register,
        // getFieldState
    } = useFormContext<{ address: TDeliveryAddressFormData }>()
    const { errors,
        // touchedFields
    } = useFormState<{ address: TDeliveryAddressFormData }>({ name: "address", exact: true })
    return <>
        {/* <RenderCount /> */}
        <div className="text-start fw-bold mt-4 mb-4">
            Delivery Address
        </div>
        <div className={"row mb-4"}>
            <div className="col">
                <TextField
                    label={"Street Address:"}
                    placeholder={"enter street address"}
                    error={errors?.address?.streetAddress}
                    {...register("address.streetAddress", {
                        required: "street address is required!"
                    })}
                />
            </div>
            <div className="col">
                <TextField
                    label={"City:"}
                    placeholder={"enter city"}
                    error={errors?.address?.city}
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
                    error={errors?.address?.landmark}
                    {...register("address.landmark")}
                />
            </div>
            <div className="col">
                <TextField
                    label={"State:"}
                    placeholder={"enter state"}
                    error={errors?.address?.state}
                    {...register("address.state")}
                />
            </div>
        </div>
        {/* {getFieldState("address")?.isTouched && <div>The Address is touched!</div>} */}
    </>
}