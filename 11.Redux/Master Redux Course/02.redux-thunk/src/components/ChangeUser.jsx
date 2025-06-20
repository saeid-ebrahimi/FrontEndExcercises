import React from 'react'
import { useDispatch } from 'react-redux'

export function ChangeUser() {
    const dispatch = useDispatch()
    function handleChangeUser() {
        const payload = {
            fName: "Eve",
            lName: "Adam",
            age: 30,
        }
        const action = {
            type: "CHANGE_USER",
            payload
        }
        dispatch(action)
    }
    return (
        <button style={{ margin: "0 1rem" }} onClick={() => { handleChangeUser() }}>ChangeUser</button>
    )
}
