import { type FormEvent, useRef } from "react";
import { type CourseGoal } from "../App";

type NewGoalProps = {
    onAddGoal: (goal:CourseGoal) => void
}
export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goalRef = useRef<HTMLInputElement>(null)
    const summaryRef = useRef<HTMLInputElement>(null)
    
    function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const title = goalRef.current!.value 
        const description = summaryRef.current!.value
        const id = Math.random();
        const newGoal = { id, title, description };
        evt.currentTarget.reset();
        onAddGoal(newGoal);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" name="goal" type="text" ref={goalRef} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" name="summary" type="text" ref={summaryRef} />
            </p>
            <button type="submit" title="Add Goal">
                Add Goal
            </button>
        </form>
    )

}