export type TSelectOption =
  | string
  | {
      value: string | number;
      label: string;
    };

export type TCheckoutFormData = {
  paymentMethod: string;
  deliveryIn: number;
};

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
