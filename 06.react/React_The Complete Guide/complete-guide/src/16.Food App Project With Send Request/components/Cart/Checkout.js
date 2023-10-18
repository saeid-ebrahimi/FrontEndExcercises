import classes from "./Checkout.module.css";
import {useRef, useState} from "react";
const isEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length === 5;
const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);

        setFormInputsValidity({
            name:enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid
        });


        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;

        if(!formIsValid){

            return;
        }
        // submit the card data
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        })
    };


    return <form className={classes.form} onSubmit={confirmHandler}>
        <div className={`${classes.control} ${formInputsValidity.name ? "" : classes.invalid}`}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            { !formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={`${classes.control} ${formInputsValidity.street ? "" : classes.invalid}}`}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!formInputsValidity.street && <p>Please enter a valid street name!</p> }
        </div>
        <div className={`${classes.control} ${formInputsValidity.postalCode ? "" : classes.invalid}}`}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalInputRef}/>
            {!formInputsValidity.postalCode && <p>Please enter a valid 5 digits postal code!</p> }
        </div>
        <div className={`${classes.control} ${formInputsValidity.city ? "" : classes.invalid}}`}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef} />
            {!formInputsValidity.city && <p>Please enter a valid city name!</p> }
        </div>
        <div className={classes.actions}>
            <button type={"button"} onClick={props.onCancel}>Cancel</button>
            <button type={"submit"} className={classes.submit}>Confirm</button>
        </div>

    </form>
};
export default Checkout;