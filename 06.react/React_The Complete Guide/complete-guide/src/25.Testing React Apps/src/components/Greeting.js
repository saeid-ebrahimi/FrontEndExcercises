import React,{useState} from "react";
import Output from "./Ouput";
const Greeting = () => {
    const [changeText, setChangedText] = useState(false);
    const changeTextHandler = () => {
        setChangedText(true)
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Text changed!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}
export default Greeting;