import classes from "../Login/Login.module.css";
import React from "react";

const Input = (props) => {
    return(
        <div
            className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor="email">E-Mail</label>
            <input
                type="email"
                id="email"
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
            />
        </div>
        <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur}>
    )
}
export default Input;