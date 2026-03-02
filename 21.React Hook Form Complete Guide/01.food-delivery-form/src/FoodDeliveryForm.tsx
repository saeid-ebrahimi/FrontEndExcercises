import React, { useState } from 'react'

type FoodDeliveryFormType = {
    customerName: string;
    mobile: string;
}
export function FoodDeliveryForm() {
    const [values, setValues] = useState<FoodDeliveryFormType>({
        customerName: "",
        mobile: "",
    })

    return (
        <div>FoodDeliveryForm</div>
    )
}
