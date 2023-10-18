import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0.0,
    addItem: (item) => {},
    remove: (id) => {},
    clearCard: () => {}
})

export default CartContext;