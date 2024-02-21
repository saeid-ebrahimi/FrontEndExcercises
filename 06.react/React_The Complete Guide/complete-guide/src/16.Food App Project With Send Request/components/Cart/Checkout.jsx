import classes from "./Checkout.module.css";
import {useRef, useState} from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = value => value.trim().length === 5 ;
const Checkout = ({onCancel, onConfirm}) => {
    const [formsInputValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalCodeInputRef.current.value
        const enteredCity = cityInputRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostal);
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });
        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid
        if (!formIsValid){
            return ;
        }
        //Submit cart data
        onConfirm({name: enteredName, street: enteredStreet, postalCode: enteredPostal, city: enteredCity})
    }
    const nameControlClasses = `${classes.control} ${formsInputValidity.name ? "" : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formsInputValidity.street ? "" : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formsInputValidity.city ? "" : classes.invalid}`
    const postalCodeControlClasses = `${classes.control} ${formsInputValidity.postalCode ? "" : classes.invalid}`
    return (
        <form onSubmit={confirmHandler} className={classes.form} >
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id={"name"} ref={nameInputRef}/>
                {!formsInputValidity.name && <p>Please enter a valid name</p> }
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id={"street"} ref={streetInputRef}/>
                {!formsInputValidity.street && <p>Please enter a valid street name</p> }
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id={"postal"} ref={postalCodeInputRef}/>
                {!formsInputValidity.postalCode && <p>Please enter a valid postal code</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id={"city"} ref={cityInputRef}/>
                {!formsInputValidity.city && <p>Please enter a valid city name</p>}
            </div>
            <div className={classes.actions}>
                <button type={"button"} onClick={onCancel}>Cancel</button>
                <button>Confirm</button>
            </div>
        </form>
    )
}
export default Checkout;