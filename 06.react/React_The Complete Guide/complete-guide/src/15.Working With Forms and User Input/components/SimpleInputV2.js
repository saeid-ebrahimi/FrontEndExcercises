import {useRef, useState, useEffect} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("")
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    useEffect(()=>{
        if (enteredNameIsValid){
            console.log("Name Input is valid");
        }
    },[enteredNameIsValid])
    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };
    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
        if (enteredName.trim() === ""){
            setEnteredNameIsValid(false);
            return;
        }
    }
    const formSubmissionHandler = event => {
        event.preventDefault();
        setEnteredNameTouched(true)
        if (enteredName.trim() === ""){
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        setEnteredName("");
        nameInputRef.current.value = "";
    }
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid': 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
          {nameInputIsInvalid && <p className={"error-text"}>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
