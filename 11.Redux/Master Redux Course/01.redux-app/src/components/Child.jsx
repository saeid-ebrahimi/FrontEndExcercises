import React from 'react'
import { GrandChild } from '.'

export function Child({ count }) {
    return (
        <div>
            <p>Child count value is {count}</p>
            <GrandChild count={count} />
        </div>
    )
}
