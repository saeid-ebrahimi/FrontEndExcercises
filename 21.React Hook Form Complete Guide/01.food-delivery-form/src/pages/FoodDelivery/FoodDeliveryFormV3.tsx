
import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form"
import { CheckoutForm } from "./components/CheckoutForm";
import type { TFoodDeliveryFormData } from "../../types";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliveryMasterForm } from "./components/FoodDeliveryMasterForm";
import { getRenderCount } from "../../lib/getRenderCount";
import { SubmitButton } from "./components/SubmitButton";


const RenderCount = getRenderCount("FoodDeliveryForm")
export function FoodDeliveryForm() {
    const formMethods: UseFormReturn<TFoodDeliveryFormData> = useForm<TFoodDeliveryFormData>({
        mode: "onSubmit",
        shouldFocusError: true,
        // reValidateMode: "onSubmit",
        delayError: 100,
        defaultValues: {
            orderNumber: new Date().valueOf(),
            customerName: "",
            mobile: "",
            email: "",
            paymentMethod: "",
            deliveryIn: 0,
            address: {
                streetAddress: "",
                landmark: "",
                city: "",
                state: "",
            }
        }
    })

    const { handleSubmit,
        formState: {
            // errors,
            // dirtyFields,
            // touchedFields,
            // isValid,
            // isValidating
            isSubmitting,
            // isSubmitted,
            // isSubmitSuccessful,
            submitCount,
        }
    } = formMethods

    // console.log("errors", errors);
    // console.log("dirty fields", dirtyFields);
    // console.log("touched fields", touchedFields);
    // console.log("isValid", isValid);
    // console.log("isValidating", isValidating);

    // console.log("isSubmitting", isSubmitting);
    // console.log("isSubmitted", isSubmitted);
    // console.log("isSubmit Successful", isSubmitSuccessful);

    const onSubmit = async (formData: TFoodDeliveryFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("form data", formData);
    }

    const onError = (errors: FieldErrors) => {
        console.log(errors);

    }

    return <>
        <p>submit count is {submitCount}</p>
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <RenderCount />
            <FormProvider {...formMethods} >
                <FoodDeliveryMasterForm />
                <div>List of ordered food items</div>
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>
            <SubmitButton type={"submit"} text={"Submit Order"} isSubmitting={isSubmitting} />
        </form>
    </>
}