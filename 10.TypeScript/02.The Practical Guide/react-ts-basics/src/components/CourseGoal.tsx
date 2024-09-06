import {type PropsWithChildren , type FC } from "react";


type CourseGoalProps = PropsWithChildren<{ title: string, description: string, id:number, onDelete: (id:number) => void }>;


const CourseGoal: FC<CourseGoalProps> = ({title, description,id, onDelete, children}) => {
    function deleteClickHandler() {
        onDelete(id)
    }
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
            <button type="button" onClick={deleteClickHandler}>Delete</button>
        </article>
    )
}
export default CourseGoal;