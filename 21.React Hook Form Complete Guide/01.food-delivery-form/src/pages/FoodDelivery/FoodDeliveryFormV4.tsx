
import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form"
import { CheckoutForm } from "./components/CheckoutForm";
import type { TFoodDeliveryFormData } from "../../types";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliveryMasterForm } from "./components/FoodDeliveryMasterForm";
import { getRenderCount } from "../../lib/getRenderCount";
import { SubmitButton } from "./components/SubmitButton";
import { useEffect } from "react";


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
            address: {
                streetAddress: "",
                landmark: "",
                city: "",
                state: "",
            }
        }
    })

    const { handleSubmit, control,
        // watch
    } = formMethods

    // these two way of using watch, subscript to the form and rerender the form by changing the watched values
    // console.log(watch(["address.city", "customerName"]))
    // console.log(watch("address.city"))

    // watch all values without rerendering the form and subscription
    // watch((value, { name, type }) => console.log(value, name, type))

    // const allControls = watch()
    // console.log(allControls);


    // const mobile = watch("mobile", "0982") // "0982" is default watch value not the field value
    // console.log(mobile);
    // default values are watch values before registering watch to the form
    // const watchOutput = watch(["email", "customerName",], { email: "sdda@gmail.com", customerName: "Smith" })
    // console.log(watchOutput);

    // const paymentMethod = watch("paymentMethod")


    // useEffect(() => {
    //     if (paymentMethod === "Online")
    //         alert("Please verify the payment")
    // }, [paymentMethod])

    // useEffect(() => {
    //     const subscription = watch((value, { name, type }) => console.log(value, name, type))
    //     return () => subscription.unsubscribe()
    // }, [watch])

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
                <div>List of ordered food items</div>
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>
            <SubmitButton type={"submit"} text={"Submit Order"} control={control} />

        </form>
    </>
}