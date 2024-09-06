import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App"
import InfoBox from "./InfoBox";
import { Fragment, type ReactNode } from "react";



type CourseGoalListProps = {
    goals: CGoal[];
    onRemoveGoal: (id: number) => void;
}
export default function CourseGoalList({ goals, onRemoveGoal }: CourseGoalListProps) {
    // console.log(goals.length);
    
    if (goals.length === 0)
    {
        return <InfoBox mode="hint" >You have no goals yet, Start adding some!</InfoBox>
    }

    let warningBox: ReactNode;
    if (goals.length >= 6)
    {
        warningBox = <InfoBox mode="warning" severity="high">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>
    }
    return (
        <Fragment>
            {warningBox}
            <ul>
                {goals.map((goal) => <li key={goal.id}>
                    <CourseGoal title={goal.title} description={goal.description} id={goal.id} onDelete={onRemoveGoal}>
                        identifier is {Math.ceil(goal.id * 1000)}
                    </CourseGoal>
                </li>)}

            </ul>
        </Fragment>
    )
}