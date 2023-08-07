import {useEffect} from "react";

function useConsoleLog(varName){
    useEffect(() => {
        console.log(varName)
    }, [varName])
}

export default useConsoleLog;