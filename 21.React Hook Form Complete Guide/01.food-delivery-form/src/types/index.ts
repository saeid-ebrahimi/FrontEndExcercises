export type TSelectOption =
  | string
  | {
      value: string | number;
      label: string;
    };

export type TCheckoutForm = {
  paymentMethod: string;
  deliveryIn: number;
};

export type TFoodDeliveryFormData =
  TCheckoutForm & {
    orderNumber: number;
    customerName: string;
    mobile: string;
    email: string;
    address: {
      streetAddress: string;
      landmark: string;
      city: string;
      state: string;
    };
  };
