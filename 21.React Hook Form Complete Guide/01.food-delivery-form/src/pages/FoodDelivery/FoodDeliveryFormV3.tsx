import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form"
import { TextField } from "../../components/controls/TextField";
import { CheckoutForm } from "./components/CheckoutForm";
import type { TFoodDeliveryFormData } from "../../types";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { FoodDeliveryMasterForm } from "./components/FoodDeliveryMasterForm";



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
            errors,
            dirtyFields,
            touchedFields,
            isValid,
            isValidating
        }
    } = formMethods

    console.log("errors", errors);
    console.log("dirty fields", dirtyFields);
    console.log("touched fields", touchedFields);
    console.log("isValid", isValid);
    console.log("isValidating", isValidating);



    const onSubmit = (formData: TFoodDeliveryFormData) => {
        console.log("form data", formData);

    }

    const onError = (errors: FieldErrors) => {
        console.log(errors);

    }

    return <>
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>

            <FormProvider {...formMethods} >
                <FoodDeliveryMasterForm />
                <div>List of ordered food items</div>
                <CheckoutForm />
                <DeliveryAddressForm />
            </FormProvider>

            <button type={"submit"} className={"btn btn-primary"}>Submit Order</button>
        </form>
    </>
}