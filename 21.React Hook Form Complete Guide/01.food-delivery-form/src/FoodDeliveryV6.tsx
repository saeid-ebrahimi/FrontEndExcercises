import { FormProvider, useForm, type FieldErrors, type UseFormReturn } from "react-hook-form";
import { getRenderCount } from "./lib/getRenderCount";
import type { TCheckoutFormData, TDeliveryAddressFormData, TFoodDeliveryPrimaryFormData } from "./types";
import { DEFAULT_FOOD_ITEM, FoodItemsTest, type TFoodItem } from "./pages/FoodDelivery/components/FoodItemsWithIndexedDBV2";
import { IDBManager } from "./db/indexeddb";
import { useEffect } from "react";
import { FoodDeliveryMasterForm } from "./pages/FoodDelivery/components/FoodDeliveryMasterForm";
import { CheckoutForm } from "./pages/FoodDelivery/components/CheckoutForm";
import { DeliveryAddressForm } from "./pages/FoodDelivery/components/DeliveryAddressForm";
import { SubmitButton } from "./pages/FoodDelivery/components/SubmitButton";


type TFoodDeliveryFormData = TFoodDeliveryPrimaryFormData & TCheckoutFormData & {
    address: TDeliveryAddressFormData,
    foodItems: TFoodItem[],

}
// --- Strict Type Definition ---
const DEFAULT_VALUES = {
    orderNumber: new Date().valueOf(),
    customerName: "",
    mobile: "",
    email: "",
    paymentMethod: "",
    deliveryIn: 0,
    foodItems: [DEFAULT_FOOD_ITEM],
    address: {
        streetAddress: "",
        landmark: "",
        city: "",
        state: "",
    },
}
const RenderCount = getRenderCount("FoodDeliveryForm")

export default function FoodDeliveryTest() {

    const formMethods = useForm<TFoodDeliveryFormData>({
        mode: "onSubmit",
        reValidateMode: "onChange",
        delayError: 100,
        defaultValues: DEFAULT_VALUES,
    })

    const {
        handleSubmit,
        control,
        reset,
        setError,
        clearErrors,
    } = formMethods as UseFormReturn<TFoodDeliveryFormData>;

    useEffect(() => {
        let foodDatabaseManager = new IDBManager("foodDB", 3, "orders");
        async function fetchAndSetData(id: number) {
            try {
                // Ensure the database is opened before attempting to get data
                await foodDatabaseManager.openDB();
                // Fetch the item using the provided ID
                const result = await foodDatabaseManager.getItemById<TFoodDeliveryFormData>(id);

                // Use reset to populate the form.
                // If result is found, use it; otherwise, fall back to DEFAULT_VALUES.
                if (result) {
                    if ("id" in result)
                        delete result.id
                    reset(result);
                } else {
                    reset(DEFAULT_VALUES, {
                        keepErrors: false,
                        keepDirty: false,
                    });
                }
            } catch (error) {
                console.error("Error fetching data for form:", error);
                // On error, reset to defaults to ensure a consistent state
                reset(DEFAULT_VALUES);
            } finally {
                // Close the database connection when fetching is complete (success or failure)
                await foodDatabaseManager.closeDB();
            }
        };
        fetchAndSetData(2);
        return () => {
            foodDatabaseManager.closeDB();

        }
    }, [reset])

    const onSubmit = async (formData: TFoodDeliveryFormData) => {
        if (formData.mobile.startsWith("938")) {
            setError("mobile", {
                type: "invalidMobile",
                message: "this mobile number is invalid"
            }, {
                shouldFocus: true,

            })
            return
        }
        await new Promise((resolve) => setTimeout(resolve, 2000))
        let foodDatabaseManager = new IDBManager("foodDB", 3, "orders");
        await foodDatabaseManager.openDB()
        const id = await foodDatabaseManager.addItem(formData)
        localStorage.setItem("id", JSON.stringify(id))
        await foodDatabaseManager.closeDB()
        reset(DEFAULT_VALUES);
        clearErrors()
    }


    const onError = (errors: FieldErrors) => {
        console.error("There are Errors in Submit\n", errors)
    }

    async function handleAddFoods() {
        const foodDatabaseManager = new IDBManager("foodDB", 2, "foods");
        await foodDatabaseManager.openDB();

        const foodItems = [
            {
                name: "Chicken Tenders",
                price: 3.5,
            },
            {
                name: "GC. Sandwich",
                price: 3.99,
            },
            { name: "Soup", price: 2.5 },
            {

                name: "Onion Rings",
                price: 2.99,
            },
            { id: 5, name: "Fries", price: 1.99 },
            { id: 6, name: "SP. Fries", price: 3.49 },
            { id: 7, name: "Sweet Tea", price: 1.79 },
            { id: 8, name: "Bottle Water", price: 1 },
            {
                name: "Canned Drinks",
                price: 1,
            },
        ]
        await Promise.all(foodItems.map(async (food) => {
            const id = await foodDatabaseManager.addItem(food)
            console.log(id);
        }))
        await foodDatabaseManager.closeDB()
    }
    return <>
        <button className={"btn btn-primary"} type={"button"} onClick={handleAddFoods}>Add Foods to DB</button>
        <RenderCount />
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)} >
            <FormProvider {...formMethods}>
                <FoodDeliveryMasterForm />
                <FoodItemsTest />
                <CheckoutForm />
                <DeliveryAddressForm />
                <SubmitButton type="submit" className={"btn-outline-primary"} text="submit order" control={control} />
            </FormProvider>
        </form>
    </>
}


