import { useFormContext, useFormState } from "react-hook-form"
import type { TDeliveryAddressFormData } from "../../../types"
import { TextField } from "../../../components/controls/TextField"
import { getRenderCount } from "../../../lib/getRenderCount"

const RenderCount = getRenderCount("DeliveryAddressForm")

export function DeliveryAddressForm() {
    const { register } = useFormContext<{ address: TDeliveryAddressFormData }>()
    const { errors } = useFormState<TDeliveryAddressFormData>({ name: ["city", "landmark", "state", "streetAddress"] })
    return <>
        <RenderCount />
        <div className="text-start fw-bold mt-4 mb-4">
            Delivery Address
        </div>
        <div className={"row mb-4"}>
            <div className="col">
                <TextField
                    label={"Street Address:"}
                    placeholder={"enter street address"}
                    error={errors?.streetAddress}
                    {...register("address.streetAddress", {
                        required: "street address is required!"
                    })}
                />
            </div>
            <div className="col">
                <TextField
                    label={"City:"}
                    placeholder={"enter city"}
                    error={errors?.city}
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
                    error={errors.landmark}
                    {...register("address.landmark")}
                />
            </div>
            <div className="col">
                <TextField
                    label={"State:"}
                    placeholder={"enter state"}
                    error={errors.state}
                    {...register("address.state")}
                />
            </div>
        </div>
    </>
}