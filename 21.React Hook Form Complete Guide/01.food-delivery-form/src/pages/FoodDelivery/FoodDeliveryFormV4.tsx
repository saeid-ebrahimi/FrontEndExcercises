
import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form"
import { CheckoutForm } from "./components/CheckoutForm";
import type { TFoodDeliveryFormData } from "../../types";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliveryMasterForm } from "./components/FoodDeliveryMasterForm";
import { getRenderCount } from "../../lib/getRenderCount";
import { SubmitButton } from "./components/SubmitButton";
// import { useEffect } from "react";

// Helper type to recursively get all dot-separated paths for an object
type NestedKeys<T> = T extends Record<string, any> ? {
    [K in keyof T]-?: K extends string
    ? T[K] extends Record<string, any>
    ? `${K}.${NestedKeys<T[K]>}` | K // Keep the key itself and its nested paths
    : K // If it's not an object, just return the key
    : never;
}[keyof T] : never;

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
        // watch,
        // getValues, //it doesn't subscribe or register field/fields
        setValue
    } = formMethods


    //register → registers and manages a form field(input) inside the form
    //subscribe → listens to form value changes without managing any fields


    // watch customer name and rerender the component on its change
    // const customerNameController = watch("customerName")
    // console.log(customerNameController);


    // these two way of using watch, register to the desired form fields and rerender the form by changing the watched values
    // console.log(watch(["address.city", "customerName"]))
    // console.log(watch("address.city"))

    // register to the desired form fields, watch all address fields and rerender the component on change any address fields
    // const addressControl = watch("address")
    // console.log(addressControl);

    // register to the desired form fields, watch city and mobile and rerender the component based on their changes
    // "test" is the watch default value before registering watch to the form, not actual default value or value of the field
    // const [city, mobile] = watch(["address.city", "mobile"], { address: { city: "test", landmark: "dasd" }, mobile: "093" })
    // console.log(city);
    // console.log(mobile);

    // const mobile = watch("mobile", "0982") // "0982" is default watch value not the field value
    // console.log(mobile);
    // default values are watch values before registering watch to the form
    // const watchOutput = watch(["email", "customerName",], { email: "sdda@gmail.com", customerName: "Smith" })
    // console.log(watchOutput);


    // register and watch all the fields changes and rerender the component on any field change
    // const allControls = watch()
    // console.log(allControls);

    // watch all values by subscription without rerendering the form and registration to the inputs
    // watch((value, { name, type }) => console.log(value, name, type))

    // watch(
    //     (values) => console.log("values:", values))

    // watch(
    //     (_, watchResult) => console.log("watchResult:", watchResult))

    // Better way to use watch by unsubscribing after usage
    // useEffect(() => {
    //     const subscription = watch((value, { name, type }) => console.log(value, name, type))
    //     return () => subscription.unsubscribe()
    // }, [watch])

    // const paymentMethod = watch("paymentMethod")
    // useEffect(() => {
    //     if (paymentMethod === "Online")
    //         alert("Please verify the payment")
    // }, [paymentMethod])


    const onSubmit = async (formData: TFoodDeliveryFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("form data", formData);
    }

    const onError = (errors: FieldErrors) => {
        console.log("errors:", errors);
    }

    const onGetValues = () => {
        // console.log(getValues("mobile"))
        // console.log(getValues(["customerName", "email"]))
        // console.log(getValues())
    }

    const onSetValue = (...fieldNames: NestedKeys<Omit<TFoodDeliveryFormData, "foodItems" | "newFoodItems">>[]) => {
        fieldNames.forEach((fieldName) => {
            setValue(fieldName, "test", {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
            })
        }
        )
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
            <button type={"button"} className={"btn btn-secondary ms-2"} onClick={onGetValues}>Get Values</button>
            <button type={"button"} className={"btn btn-outline-secondary ms-2"} onClick={() => onSetValue("customerName", "email", "deliveryIn", "mobile", "orderNumber", "address.landmark")}>Set TestValue</button>
        </form>
    </>
}