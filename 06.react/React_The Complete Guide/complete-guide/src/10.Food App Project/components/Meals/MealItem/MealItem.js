import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import cartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cardCtx = useContext(cartContext)
    const addToCartHandler = amount => {
        cardCtx.addItem({
            id:props.id,
            name:props.name,
            amount: amount,
            price: props.price
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;