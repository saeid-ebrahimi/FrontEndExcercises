import  {useState, Fragment} from "react"

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal"
import Wrapper from "../Helper/Wrapper"
const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState(null);
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null)
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: "Invalid Input", message: "Please enter a valid name and age (non-empty values)."})
            return;
        }
        if (+enteredAge.trim() < 1){
            setError({title: "Invalid Age", message: "Please enter a valid age (age > 0)."})
            setEnteredAge("")
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");

    }
    return (
        // using fragments( need to named import Fragment) to wrap instead of div: Fragment or <>
        <Fragment>
            { error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>} {/* all overlays like Modals should not be renders as adjacent in real html because of structure*/}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor={'username'}>Username</label>
                    <input type="text" id={"username"}
                           onChange={usernameChangeHandler}
                           value={enteredUsername}
                    />
                    <label htmlFor={'age'}>Age (years)</label>
                    <input type="number" id={"age"}
                           onChange={ageChangeHandler}
                           value={enteredAge}
                    />
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
};

export default AddUser;