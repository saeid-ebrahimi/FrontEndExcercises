
import "./Expenses.css"
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props){
    const [filteredYear, setFilteredYear] = useState("2020")
    let filterInfoText = "2019, 2021 & 2022"
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
        if(selectedYear === "2019"){
            filterInfoText ="2020, 2021 & 2022"
        }else if (selectedYear === "2021"){
            filterInfoText = "2019, 2020 & 2022"
        }else if (selectedYear === "2022"){
            filterInfoText ="2019, 2021 & 2021"
        }
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList  items={filteredExpenses}/>
        </Card>

    )
}
export default Expenses