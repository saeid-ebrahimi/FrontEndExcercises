import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true)
    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        // console.log(enteredAmount)
        const enteredAmountNumber = + enteredAmount
        if (enteredAmountNumber<1 || enteredAmount.trim().length === 0 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={amountInputRef}
                label={"Amount"}
                input={
                {
                    id: "amount"+props.id,
                    type:"number",
                    min:"1",
                    max:"5",
                    step:"1",
                    defaultValue:"1"
                }
            }/>
            {!amountIsValid && <p style={{color:"salmon"}}>Please enter a valid amount (1-5)</p>}
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm;