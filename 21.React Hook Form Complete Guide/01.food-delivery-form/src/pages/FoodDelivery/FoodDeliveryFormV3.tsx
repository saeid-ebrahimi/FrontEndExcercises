
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

    const {
        handleSubmit,
        control,
        getFieldState,
        formState: {
            // errors: formErrors
            // touchedFields,
            // isValid,
            // isValidating,
            // isSubmitting,
            // isSubmitted,
            // isSubmitSuccessful,
            submitCount,
        }
    } = formMethods as UseFormReturn<TFoodDeliveryFormData>;

    const onSubmit = async (formData: TFoodDeliveryFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("formData", formData);
    }

    // to watch formErrors we need use effect on it
    // useEffect(() => {
    //     console.warn("form errors", formErrors)
    // }, [formErrors])

    // isValid state checked on any Blur on the fields and rerender component on blur
    // console.log("isValid:", isValid)

    // touchedFields checked on any Blur on the fields and rerender component on blur
    // console.log("touchedFields", touchedFields)

    // isValidating change state based on form revalidation mode and form mode and rerender the component based on its change
    // console.log("isValidating", isValidating)

    // initial value is false and based on submitting the form changes from false to true , then to false, 
    // rerender the component based on its change
    // console.log("isSubmitting", isSubmitting)

    // initial value is false and anytime form is submitted it shows true
    // rerender the component based on number of form submission
    // console.log("isSubmitted", isSubmitted)

    // initial value is false and anytime form is submitted without error it shows true otherwise it shows false
    // rerender the component based on number of form submission
    // console.log("isSubmitSuccessful", isSubmitSuccessful)

    // it shows number of times we submitted a form
    // rerender the component based on the number of form submissions
    // console.log("isSubmitted", isSubmitted)

    console.log("submit count", submitCount)

    const onError = (errors: FieldErrors) => {
        console.error("There are Errors in Submit\n", errors)
        const field = "address"
        console.log("field state", field, getFieldState(field));

        // console.log("touchedFields", touchedFields)
    }


    return <>
        {/* <p>submit count is {submitCount}</p> */}
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <RenderCount />
            <FormProvider {...formMethods} >
                <FoodDeliveryMasterForm />
                <div>List of ordered food items</div>
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>
            {/* {getFieldState("address").isTouched && <div>field is touched </div>} */}
            <SubmitButton type={"submit"} text={"Submit Order"} control={control} />

        </form>
    </>
}