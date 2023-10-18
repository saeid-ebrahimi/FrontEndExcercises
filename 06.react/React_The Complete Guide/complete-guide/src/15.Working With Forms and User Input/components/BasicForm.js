import useInput from "../hooks/use-input";

const BasicForm = () => {
    const isNotEmpty = value => value.trim() !== "";
    const isEmail = value => value.includes("@");
    const {
        value:fNameValue,
        isValid:fNameIsValid,
        hasError: fNameHasError,
        valueChangeHandler:fNameChangeHandler,
        inputBlurHandler:fNameBlurHandler,
        reset: resetFName
    } = useInput(isNotEmpty);
    const {
        value:lNameValue,
        isValid:lNameIsValid,
        hasError: lNameHasError,
        valueChangeHandler:lNameChangeHandler,
        inputBlurHandler:lNameBlurHandler,
        reset: resetLName
    } = useInput(isNotEmpty);
    const {
        value:emailValue,
        isValid:emailIsValid,
        hasError: emailHasError,
        valueChangeHandler:emailChangeHandler,
        inputBlurHandler:emailBlurHandler,
        reset: resetEmail
    } = useInput(isEmail);

    const formIsValid = fNameIsValid && lNameIsValid && emailIsValid;
    const submitHandler = event => {
        event.preventDefault();
        if(!formIsValid){ return;}
        console.log("Submitted!");
        console.log(fNameValue, lNameValue, emailValue);

        resetFName();
        resetLName();
        resetEmail();
    }

    const firstNameClasses = fNameHasError ? "form-control invalid": "form-control";
    const lastNameClasses = lNameHasError ? "form-control invalid": "form-control";
    const emailClasses = emailHasError ? "form-control invalid": "form-control";
    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' value={fNameValue} onBlur={fNameBlurHandler} onChange={fNameChangeHandler}/>
                    {fNameHasError && <p className={'error-text'}>Please enter a first name.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' value={lNameValue} onBlur={lNameBlurHandler} onChange={lNameChangeHandler}/>
                    {lNameHasError && <p className={'error-text'}>Please enter a last name.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' value={emailValue} onBlur={emailBlurHandler} onChange={emailChangeHandler}/>
                {emailHasError && <p className={'error-text'}>Please enter a email.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
