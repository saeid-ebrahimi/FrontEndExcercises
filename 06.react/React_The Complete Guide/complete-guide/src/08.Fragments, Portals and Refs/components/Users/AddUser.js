import {useState, Fragment, useRef} from "react"

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal"

const AddUser = props => {

    const [error, setError] = useState(null);

    const nameInputRef =  useRef();
    const ageInputRef =  useRef();
    const errorHandler = () => {
        setError(null)
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 ||enteredUserAge.trim().length === 0){
            setError({title: "Invalid Input", message: "Please enter a valid name and age (non-empty values)."})
            return;
        }
        if (+enteredUserAge.trim() < 1){
            setError({title: "Invalid Age", message: "Please enter a valid age (age > 0)."})
            ageInputRef.current.value = "";
            return;
        }
        nameInputRef.current.value = ""; // it's directly change real dom and better to not use
        ageInputRef.current.value = ""; // better to use Ref to only read a value from actual dom (not shadow dom)
        props.onAddUser(enteredName, enteredUserAge);


    }
    // components with ref are uncontrolled components
    //  with two-way binding are controlled components
    return (
        // using fragments( need to named import Fragment) to wrap instead of div: Fragment or <>
        <Fragment>
            { error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>} {/* all overlays like Modals should not be renders as adjacent in real html because of structure*/}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor={'username'}>Username</label>
                    <input type="text" id={"username"}
                           ref={nameInputRef}
                    />
                    <label htmlFor={'age'}>Age (years)</label>
                    <input type="number" id={"age"}
                           ref={ageInputRef}
                    />
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
};

export default AddUser;