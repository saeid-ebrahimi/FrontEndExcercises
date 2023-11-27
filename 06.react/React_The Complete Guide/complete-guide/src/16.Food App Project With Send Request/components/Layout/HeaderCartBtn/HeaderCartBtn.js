import React from "react";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";
import classes from "./HeaderCartBtn.module.css"
import {useContext, useEffect, useState} from "react";

const HeaderCartBtn = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.items.map)
    const {items:items} = cartCtx
    const numberOfCartItems = cartCtx.items.reduce((currentNumber,item) => {
        return currentNumber + item.amount
    }, 0);
    const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump: ""}`;
    useEffect( () => {
        if (items.length === 0)
            return;
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 310)
        return () => { clearTimeout(timer)}
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}> {numberOfCartItems} </span>
        </button>
    )
};

export default HeaderCartBtn;