import classes from "./events-search.module.css"
import Button from "@/components/ui/button";
import {useRef} from "react";

const months = [
    {id:1, name:"January", value: 1},
    {id:2, name:"February", value: 2},
    {id:3, name:"March", value: 3},
    {id:4, name:"April", value: 4},
    {id:5, name:"May", value: 5},
    {id:6, name:"June", value: 6},
    {id:7, name:"July", value: 7},
    {id:8, name:"August", value: 8},
    {id:9, name:"September", value: 9},
    {id:10, name:"October", value: 10},
    {id:11, name:"November", value: 11},
    {id:12, name:"December", value: 12},
]
export default function EventsSearch(props){
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const searchHandler = () => {}
    const submitHandler = (event) => {
        event.preventDefault();
        const selectedYear = yearInputRef.current.value
        const selectedMonth = monthInputRef.current.value
        props.onSearch(selectedYear, selectedMonth);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select name="year" id="year" ref={yearInputRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Month</label>
                <select name="month" id="month" ref={monthInputRef}>
                    {months.map(month => <option key={month.id} value={month.value}>{month.name}</option>)}
                </select>
            </div>
        </div>
        <Button onClick={searchHandler}>Find Events</Button>
    </form>
}