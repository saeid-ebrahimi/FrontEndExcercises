import React from 'react'
import { useDispatch } from 'react-redux'

export function RetrieveGift() {
    const dispatch = useDispatch()
    const handleRetrieveGift = () => {
        const gift = "Iphone 16"
        const action = {
            type: "UNBOX_GIFT",
            payload: gift
        }
        dispatch(action)
    }
    return (
        <button onClick={() => { handleRetrieveGift() }}>Retrieve your gift</button>
    )
}
