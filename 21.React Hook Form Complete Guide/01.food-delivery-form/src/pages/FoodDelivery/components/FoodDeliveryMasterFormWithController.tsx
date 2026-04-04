import { Controller, useFormContext, useFormState } from "react-hook-form";

import type { TFoodDeliveryMasterFormData } from "../../../types";
import { FormControl, FormLabel, TextField } from "@mui/material";
// import { getRenderCount } from "../../../lib/getRenderCount";

// const RenderCount = getRenderCount("FoodDeliveryMasterForm")

export function FoodDeliveryMasterFormWithController() {
    const { control } = useFormContext<TFoodDeliveryMasterFormData>()
    const { isSubmitting } = useFormState<TFoodDeliveryMasterFormData>({
        name: ["orderNumber",
            "customerName",
            "mobile",
            "email",],
        exact: true,
    })
    return (
        <>
            {/* <RenderCount /> */}
            <div className="row mb-4">
                <div className="col">
                    <Controller
                        control={control}
                        name="orderNumber"
                        exact={true}
                        rules={{
                            required: {
                                value: true,
                                message: "order number value is required!"
                            }
                        }}
                        render={({ field, fieldState }) => <>
                            <FormControl fullWidth error={!!fieldState.error}>
                                <FormLabel id={"orderNumber"} hidden>Order Number</FormLabel>
                                <TextField
                                    disabled={isSubmitting}
                                    placeholder={"Order number"}
                                    label={"Order Number:"}
                                    helperText={fieldState.error?.message}
                                    {...field}
                                />
                            </FormControl>
                        </>}
                    />
                </div>
                <div className={"col"}>
                    <Controller
                        control={control}
                        name="mobile"
                        exact={true}
                        rules={{
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
                        }}
                        render={({ field, fieldState }) =>
                            <>
                                <FormControl fullWidth error={!!fieldState.error}>
                                    <FormLabel id={"mobile"} hidden={true}>Mobile</FormLabel>
                                    <TextField
                                        label={"mobile"}
                                        placeholder={"enter mobile number"}
                                        helperText={fieldState.error?.message}
                                        disabled={isSubmitting}
                                        {...field}
                                    />
                                </FormControl>
                            </>
                        }
                    />
                </div>
            </div>
            <div className={"row mb-4"}>
                <div className="col">
                    <Controller
                        control={control}
                        name={"customerName"}
                        exact={true}
                        rules={{
                            required: {
                                value: true,
                                message: "customer name is required!"
                            }
                        }}
                        render={({ field, fieldState }) => <>
                            <FormControl fullWidth error={!!fieldState.error}>
                                <FormLabel id={"customerName"} hidden={true}>Customer Name</FormLabel>
                                <TextField
                                    label={"customerName"}
                                    placeholder={"enter customer name"}
                                    helperText={fieldState.error?.message}
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                        </>}
                    />
                </div>
                <div className={"col"}>
                    <Controller
                        control={control}
                        name={"email"}
                        exact={true}
                        rules={{
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "incorrect email format entered"
                            },
                            validate: {
                                notFake: (value) => value !== "email@gmail.com" || "the email is blocked",
                                notFromBlacklistedDomain: (value) => (!value.endsWith(".ir") && !value.includes("@example")) || "this domain is blocked"
                            }
                        }}
                        render={({ field, fieldState }) => <>
                            <FormControl fullWidth error={!!fieldState.error}>
                                <FormLabel id={"email"} hidden={true}>Email</FormLabel>
                                <TextField
                                    label={"Email"}
                                    placeholder={"enter email"}
                                    helperText={fieldState.error?.message}
                                    disabled={isSubmitting}
                                    {...field}
                                />
                            </FormControl>
                        </>}
                    />
                </div>
            </div>
        </>
    )
}
