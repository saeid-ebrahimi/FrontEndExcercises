import React from "react";

React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    remove: (id) => {}
})

export default CartContext;