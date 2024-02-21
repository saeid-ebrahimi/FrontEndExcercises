import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef(({label, input}, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id} className={classes.label}>{label}</label>
            <input {...input} ref={ref}/>
        </div>
    )
})
export default Input;