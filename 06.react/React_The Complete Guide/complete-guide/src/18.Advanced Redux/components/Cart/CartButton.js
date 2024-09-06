import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../../store/ui-slice";

const CartButton = (props) => {
    const dispatch = useDispatch()
    const cartTotalQuantity = useSelector(state => state.cart.totalQuantity)
    const showCartHandler = () => {
        dispatch(uiActions.toggle())
    }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
