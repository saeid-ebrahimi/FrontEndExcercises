import "./ExpenseForm.css"
import React, {useState} from "react";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title:"",
        amount: "",
        date: ""
    })
    const inputChangeHandler = (identifier, value) => {
        if(identifier === "title"){
            setUserInput((prevState)=> {
                return {...prevState, title: value}
            })
        }else if(identifier==="date"){
            setUserInput((prevState)=>{
                return {...prevState, date: value}
            })
        }else if(identifier === "amount"){
            setUserInput((prevState) => {
                return {...prevState, amount: parseFloat(value)}
            })
        }
    }
    const submitHandler = (event) => {
        event.preventDefault()
        userInput.date = new Date(userInput.date)
        const expenseData = {...userInput}
        props.onSaveExpenseData(expenseData)
        setUserInput({date: "", amount: "", title: ""})
    }
    return(
        <form onSubmit={ (event) => submitHandler(event)}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={userInput.enteredTitle}
                       onChange={(event)=> inputChangeHandler("title", event.target.value)}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" value={userInput.enteredAmount} min={"0.01"} step={"0.01"}
                       onChange={(event) => inputChangeHandler("amount", event.target.value) }/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" value={userInput.enteredDate} min={"2023-01-01"} max={"2025-12-31"}
                       onChange={(event) => inputChangeHandler("date", event.target.value)}/>
            </div>
            <div className="new-expense__actions">
               <button type={"submit"} >Add Expense</button>
            </div>
        </div>
        </form>
    )
}
export default ExpenseForm