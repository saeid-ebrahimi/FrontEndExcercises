import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItem = ({id,name,description,price}) => {
    const cartContext = useContext(CartContext)
    const addToCartHandler = (amount)=>{
        cartContext.addItem({id,name,price,amount})
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>${price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}
export default MealItem;