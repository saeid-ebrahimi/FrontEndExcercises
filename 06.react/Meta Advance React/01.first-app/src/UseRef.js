import React from "react"
import {useRef} from "react";

function App() {
    const formInputRef = useRef(null)
    const focusInput = () => {
        formInputRef.current.focus()
    }
    return (
        <>
            <h1>Using useRef to access underlying DOM</h1>
            <input type="text" ref={formInputRef}/>
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

// export default App