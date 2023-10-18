import "./ExpenseForm.css"
import React, {useState} from "react";

const ExpenseForm_v1 = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle:"",
        enteredAmount: "",
        enteredDate: ""
    })
    //const [enteredTitle, setEnteredTitle] = useState("")
    const titleChangeHandler = (event) => {
        console.log(event.target.value)
        //setEnteredTitle(event.target.value)
        //setUserInput({...userInput, enteredTitle: event.target.value})
        // better setter version where current store depends on previous store
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })
    }
    //const [enteredAmount, setEnteredAmount] = useState("0.01")
    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value)
        //setUserInput({...userInput, enteredAmount: event.target.value})
        // better setter version where current store depends on previous store
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        })
    }
    //const [enteredDate, setEnteredDate] = useState("2023-01-01")
    const dateChangeHandler = (event) => {
        //setEnteredDate(dateChangeHandler)
        // setUserInput({...userInput, enteredDate: event.target.value})
        // better setter version where current store depends on previous store
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        })
    }

    return(
        <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min={"0.01"} step={"0.01"} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min={"2023-01-01"} max={"2025-12-31"} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
               <button type={"submit"}>Add Expense</button>
            </div>
        </div>
        </form>
    )
}
export default ExpenseForm_v1