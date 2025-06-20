import React from 'react'
import { useDispatch } from 'react-redux'

export function ChangeUserName() {
    const dispatch = useDispatch()
    function changeUserName() {
        const name = "Solomon Zion"
        const action = {
            type: "CHANGE_USERNAME",
            payload: {
                fName: name.split(" ")[0],
                lName: name.split(" ")[1],
            }
        }
        dispatch(action)
    }
    return (
        <button onClick={() => { changeUserName() }}>ChangeUserName</button>
    )
}
