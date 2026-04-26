import z from "zod";
import { required } from "zod/v4-mini";

export type TSelectOption =
  | string
  | {
      value: string | number;
      label: string;
    };

export const FoodDeliveryPrimaryDataSchema =
  z.object({
    orderNumber: z
      .number()
      .min(0, "order name is required"),
    customerName: z
      .string()
      .min(1, "customer name is required"),
    mobile: z
      .string()
      .min(1, "mobile is required"),
    email: z
      .string()
      .min(1, "mobile is required"),
  });

export type TFoodDeliveryPrimaryFormData =
  z.infer<typeof FoodDeliveryPrimaryDataSchema>;
// export type TFoodDeliveryPrimaryFormData = {
//   orderNumber: number;
//   customerName: string;
//   mobile: string;
//   email: string;
// };

export type TCheckoutFormData = {
  paymentMethod: string;
  deliveryIn: number;
};

export const CheckoutSchema = z.object({
  paymentMethod: z.string(),
});
export type TDeliveryAddressFormData = {
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
};

export type TFoodDeliveryMasterFormData = {
  orderNumber: number;
  customerName: string;
  mobile: string;
  email: string;
  gTotal: number;
};

export type TFoodItem = { name: string };

export type TOrderedFoodItem = {
  name: string;
  quantity: number;
};

export type NewFoodItem = {
  foodId: number;
  price: number;
  quantity: number;
  totalPrice: number;
};

export type TFood = {
  foodId: number;
  name: string;
  price: number;
};

export type TFoodDeliveryFormData =
  TCheckoutFormData &
    TFoodDeliveryMasterFormData & {
      address: TDeliveryAddressFormData;
      // foodItems: TFoodItem[];
      // orderedFoodItems: TOrderedFoodItem[];
      newFoodItems: NewFoodItem[];
    };
