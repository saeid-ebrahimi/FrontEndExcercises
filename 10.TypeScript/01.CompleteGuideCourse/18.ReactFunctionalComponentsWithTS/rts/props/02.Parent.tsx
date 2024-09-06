import React from "react"
import {Child} from "./02.Child";
const Parent = () => {
    return <Child color="green" onClick={()=> { console.log("Clicked!");
    }}/>
}