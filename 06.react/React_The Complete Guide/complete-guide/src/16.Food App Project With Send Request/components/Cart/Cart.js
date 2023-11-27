import React from "react";
import classes from "./Cart.module.css"
import Modal from "../UI/Modal/Modal";
import {useContext, useState, Fragment} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false)
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = id => {
        cartCtx.remove(id)
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount:1})
    };
    const orderHandler = () => {
        setIsCheckout(true);
    }
    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        const response = await fetch("https://react-http6b4a6.firebase.com/orders.json", {
            method:"POST",
            body:JSON.stringify({
                user:userData,
                orderedItems: cartCtx.items
            })
        })
        if (!response.ok){
            throw new Error("something went wrong while submitting data")
        }

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCard();
    }
    console.log(cartCtx)
    const cartItems =
        <ul className={classes['cart-items']}>
            {cartCtx.items.map( item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}/>))}
        </ul>
    const modalActions =
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>

    const cartModalContent =
        <Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalActions}
        </Fragment>
    const isSubmittingModalContent = <p> Sending order data...</p>
    const didSubmitModalContent = <Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Fragment>
    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && !didSubmit && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
};

export default Cart;