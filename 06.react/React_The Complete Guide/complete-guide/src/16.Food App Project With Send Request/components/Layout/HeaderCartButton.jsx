import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({onClick}) => {
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item)=>{ return curNumber + item.amount}, 0);
    const [btnBadgeChanged, setBtnBadgeChanged] = useState(false);
    let btnClasses = `${classes.button} ${btnBadgeChanged ?classes.bump:""}`;
    useEffect(()=>{
        if (items.length === 0){
            return
        }
        setBtnBadgeChanged(true)
        const timer = setTimeout(()=>{
            setBtnBadgeChanged(false)
        }, 100)
        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}
export default HeaderCartButton;