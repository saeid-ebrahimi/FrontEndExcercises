import { type FormEvent } from "react";
import { type CourseGoal } from "../App";

type NewGoalProps = {
    onAddGoal: (goal:CourseGoal) => void
}
export default function NewGoal({onAddGoal}: NewGoalProps) {
     // one of approaches to get data
     function handleSubmit1(evt: FormEvent<HTMLFormElement>) {
         evt.preventDefault();
         const data = new FormData(evt.currentTarget);
         const title = data.get("goal") as string
         const description = data.get("summary") as string
         const id = Math.random();

         const newGoal = {
             id, title, description
         }
         onAddGoal(newGoal)   
    }

    return (
        <form onSubmit={handleSubmit1}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" name="goal" type="text"/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" name="summary" type="text" />
            </p>
            <button type="submit" title="Add Goal">
                Add Goal
            </button>
        </form>
    )

}