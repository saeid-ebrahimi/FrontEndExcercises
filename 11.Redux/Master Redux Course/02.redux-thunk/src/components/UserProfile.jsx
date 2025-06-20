import React from 'react'

export function UserProfile({ user }) {

    return (
        <div>
            <p><span>First Name: </span><span>{user.fName}</span></p>
            <p><span>Last Name: </span><span>{user.lName}</span></p>
            <p><span>Age: </span><span>{user.age}</span></p>
        </div>
    )
}
