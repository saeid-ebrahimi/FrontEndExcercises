
import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form"
import { CheckoutForm } from "./components/CheckoutForm";
import type { TFoodDeliveryFormData } from "../../types";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliveryMasterForm } from "./components/FoodDeliveryMasterForm";
import { getRenderCount } from "../../lib/getRenderCount";
import { SubmitButton } from "./components/SubmitButton";
// import { OrderedFoodItems } from "./components/FoodItemsV2";
import { NewFoodItems } from "./components/FoodItemsV3";
import { createOrder, getOrderById } from "../../db";
import FormLoader from "./common/FormLoader";

const defaultValues = {
    orderNumber: new Date().valueOf(),
    customerName: "",
    mobile: "",
    email: "",
    paymentMethod: "",
    deliveryIn: 0,
    // foodItems: [{ name: "" }],
    // orderedFoodItems: [{ name: "", quantity: 0 }],
    newFoodItems: [{ foodId: 0, price: 0, quantity: 0, totalPrice: 0 }],
    gTotal: 0,
    address: {
        streetAddress: "",
        landmark: "",
        city: "",
        state: "",
    }
}
const RenderCount = getRenderCount("FoodDeliveryForm")
export function FoodDeliveryForm() {
    const id: number = JSON.parse(localStorage.getItem("orderId") ?? "1") - 1
    const formMethods: UseFormReturn<TFoodDeliveryFormData> = useForm<TFoodDeliveryFormData>({
        mode: "onSubmit",
        shouldFocusError: true,
        delayError: 100,
        defaultValues: async () => {
            if (id === 0) return new Promise(resolve => resolve(defaultValues));
            else {
                const tempOrder = await getOrderById(id);
                return new Promise((resolve) => resolve(tempOrder ? tempOrder : defaultValues))
            }
        },
        // values: (() => {
        //     if (id === 0) return defaultValues
        //     else {
        //         const tempOrder = getOrderById(id);
        //         return tempOrder ? tempOrder : defaultValues
        //     }
        // })(),
    })

    const {
        handleSubmit,
        control,
        // resetField,
        setError,
        clearErrors,
        reset
    } = formMethods

    const onSubmit = async (formData: TFoodDeliveryFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        if (formData.email === "abc@gmail.com") {
            setError("email", {
                type: "duplicateEmail",
                message: "the email already exists"

            }, {
                shouldFocus: true,
            })
            return
        }
        createOrder(formData)
        clearErrors()
    }

    const onError = (errors: FieldErrors) => {
        console.log("errors:", errors);
    }
    const onReset = () => {
        // resetField("email", {
        //     keepError: true,
        //     defaultValue: ""
        // })
        reset(defaultValues, {
            // keepErrors: true
            // keepDirtyValues: true
        })
    }
    return <>
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <RenderCount />
            <FormLoader control={control} />
            <FormProvider {...formMethods} >
                <FoodDeliveryMasterForm />
                {/* <FoodItems /> */}
                <NewFoodItems />
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>
            <SubmitButton type={"submit"} text={"Submit Order"} control={control} />
            <button type={"button"} onClick={onReset} className={"btn btn-secondary ms-2"}>Reset</button>
        </form>
    </>
}