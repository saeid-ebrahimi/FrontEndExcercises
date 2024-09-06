import React, {Fragment} from "react";

interface ChildProps{
    color: string;
    onClick: () => void;
}

export const Child: React.FC<ChildProps> = ({color, onClick}: ChildProps) => {

    return (
        <Fragment>
            <div>{color}</div>
            <button onClick={onClick}>Click Me</button>
        </Fragment>
    )
} 
