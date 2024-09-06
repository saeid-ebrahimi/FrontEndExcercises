import React from "react";
const EventComponent:React.FC = () => {
    const onChange = (evt: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(evt.target.value);
    };
    const onDragStart = (evt:React.DragEvent<HTMLDivElement>) => {
        console.log("I'm being dragged")
    };
    const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
        console.log("I've been dragged!")
    };
    return (
        <div>
            <input onChange={e => console.log(e)}/>
            <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>Drag Me!</div>
        </div>
    )
}

export default EventComponent;