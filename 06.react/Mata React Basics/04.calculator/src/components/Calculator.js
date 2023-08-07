
import {XLg, PlusLg, DashLg, SlashLg} from "react-bootstrap-icons"
import {useState} from "react";

function Calculator(){
    let [val, setVal] = useState("0")
    let prevVal =0
    let currVal = 0
    function handleChange(){
        let number = Number(val)+1
        console.log(number)
        setVal(number.toString())
    }
    function handleAdd(){
        prevVal = Number(currVal)
        currVal = Number(val)
        const result = prevVal + currVal
        val = setVal(result.toString());
    }
    function handleSub(){}
    function handleMultiply(){}
    function handleDivide(){}
    return (
        <>
        <input value={val} onChange={handleChange} type="number" name="calc-input" id="calc-input"/> <br/>
            <div>
                <button onClick={handleAdd}>
                    <PlusLg/>
                </button>
                <button onClick={handleSub}>
                    <DashLg/>
                </button>
                <button onClick={handleMultiply}>
                    <XLg/>
                </button>
                <button onClick={handleDivide}>
                    <SlashLg/>
                </button>
            </div>
            <div>
                <button>Reset Input</button>
                <button>Reset Result</button>
            </div>

        </>
    )
}

export default Calculator;