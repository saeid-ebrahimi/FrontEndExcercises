import styles from "./UserInput.module.css"
import {useState} from "react";
const INITIAL_USER_INPUT = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}
const UserInput = props => {
    const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
    const resetHandler = () => {
        setUserInput(INITIAL_USER_INPUT);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(userInput)
        props.onCalculate(userInput);
    }
    const inputChangeHandler = (inputId, value) => {
        setUserInput((prevState)=> ( {...prevState, [inputId]: value}))
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number"
                           onChange={(event) => (inputChangeHandler(event.target.id, event.target.value))}
                           id="current-savings"
                           value={userInput["current-savings"]}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number"
                           onChange={(event) => (inputChangeHandler(event.target.id, event.target.value))}
                           id="yearly-contribution"
                           value={userInput["yearly-contribution"]}/>
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number"
                           onChange={(event) => (inputChangeHandler(event.target.id, event.target.value))}
                           id="expected-return"
                           value={userInput["expected-return"]}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number"
                           onChange={(event) => (inputChangeHandler(event.target.id, event.target.value))}
                           id="duration"
                           value={userInput["duration"]}
                    />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
};

export default UserInput;