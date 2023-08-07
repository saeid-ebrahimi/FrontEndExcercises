import {useState} from "react";

export default function InputComponent(){
    const [inputText, setText] = useState("hello")
    function handleChange(evt){
        setText(evt.target.value)
    }
    return (
        <>
            <input value={inputText} onChange={handleChange}/>
            <p>You typed: {inputText}</p>
            <button onClick={()=> setText("hello")}>
                Reset
            </button>
        </>
    )
}