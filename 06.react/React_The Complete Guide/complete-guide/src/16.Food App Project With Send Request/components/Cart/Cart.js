import classes from "./Cart.module.css"
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = id => {
        cartCtx.remove(id)
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount:1})
    };
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
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;