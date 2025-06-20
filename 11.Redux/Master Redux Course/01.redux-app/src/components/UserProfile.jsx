import React from 'react'
import { useSelector } from 'react-redux'

export function UserProfile() {
    const user = useSelector(state => state.user)
    return (
        <div>
            <p><span>First Name: </span><span>{user.fName}</span></p>
            <p><span>Last Name: </span><span>{user.lName}</span></p>
            <p><span>Age: </span><span>{user.age}</span></p>
        </div>
    )
}
