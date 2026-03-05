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
export type TFoodDeliveryFormData =
  TCheckoutFormData &
    TFoodDeliveryMasterFormData & {
      address: TDeliveryAddressFormData;
    };
