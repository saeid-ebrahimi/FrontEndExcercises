
import classes from "../Cart/Cart.module.css";
import Modal from "../UI/Modal";
import {useContext, useState, Fragment} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem"
import Checkout from "./Checkout";

const Cart = ({onClose}) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false);

    const cardContext = useContext(CartContext)
    const totalAmount = cardContext.totalAmount.toFixed(2)
    const hasItems = cardContext.items.length > 0
    const cartItemRemoveHandler = id => {
        cardContext.removeItem(id)
    }
    const cartItemAddHandler = item => {
        cardContext.addItem({...item,amount:1})
    }
    const orderHandler = ()=>{
        setIsCheckout(true)
    };
    const submitOrderHandler = async (userData) => {
        try{
            setIsSubmitting(true)
            const response = await fetch("https://foodapprgc-default-rtdb.firebaseio.com/orders.json",
                {method:"POST", body: JSON.stringify({user: userData, orderedItems: cardContext.items})}
            )
            if (!response.ok){
                console.log("cannot send data")
                setDidSubmit(false)
                setIsSubmitting(false)
                return;
            }
            setIsSubmitting(false)
            setDidSubmit(true)
            cardContext.clearCart()
        }catch (error){
            console.log(error.message)
        }


    }
    const cartItems = <ul className={classes['cart-items']}>
        {cardContext.items.map(item =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
            /> )}
    </ul>
    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    )
    const cartModalContent = (
        <Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            {isCheckout &&  <Checkout onCancel={onClose} onConfirm={submitOrderHandler} />}
            {!isCheckout && modalActions}
        </Fragment>
    )
    const isSubmittingModalContent = <p>Sending Order Data</p>
    const didSubmitModalContent = <Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={onClose}>Close</button>
        </div>
    </Fragment>
    return (
        <Modal onClose={onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && !didSubmit && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
}
export default Cart;