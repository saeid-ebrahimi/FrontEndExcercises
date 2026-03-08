
import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form"
import { CheckoutForm } from "./components/CheckoutForm";
import type { TFoodDeliveryFormData } from "../../types";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliveryMasterForm } from "./components/FoodDeliveryMasterForm";
import { getRenderCount } from "../../lib/getRenderCount";
import { SubmitButton } from "./components/SubmitButton";
import { OrderedFoodItems } from "./components/OrderedFoodItems";

const RenderCount = getRenderCount("FoodDeliveryForm")
export function FoodDeliveryForm() {
    const formMethods: UseFormReturn<TFoodDeliveryFormData> = useForm<TFoodDeliveryFormData>({
        mode: "onSubmit",
        shouldFocusError: true,
        delayError: 100,
        defaultValues: {
            orderNumber: new Date().valueOf(),
            customerName: "",
            mobile: "",
            email: "",
            paymentMethod: "",
            deliveryIn: 0,
            // foodItems: [{ name: "" }],
            orderedFoodItems: [{ name: "", quantity: 0 }],
            address: {
                streetAddress: "",
                landmark: "",
                city: "",
                state: "",
            }
        }
    })

    const {
        handleSubmit,
        control,
    } = formMethods

    const onSubmit = async (formData: TFoodDeliveryFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("form data", formData);
    }

    const onError = (errors: FieldErrors) => {
        console.log("errors:", errors);
    }
    return <>
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <RenderCount />
            <FormProvider {...formMethods} >
                <FoodDeliveryMasterForm />
                {/* <FoodItems /> */}
                <OrderedFoodItems />
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>
            <SubmitButton type={"submit"} text={"Submit Order"} control={control} />
        </form>
    </>
}