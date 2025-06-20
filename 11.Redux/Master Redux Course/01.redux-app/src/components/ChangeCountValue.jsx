import React from 'react'
import { useDispatch } from 'react-redux'

export function ChangeCountValue({ count }) {

    const dispatch = useDispatch()
    function handleChangeCount() {
        const action = {
            type: "INCREASE_COUNT_BY_ONE",
        }
        dispatch(action)
    }
    return (
        <button onClick={() => { handleChangeCount() }}>
            count is {count}
        </button>
    )
}
