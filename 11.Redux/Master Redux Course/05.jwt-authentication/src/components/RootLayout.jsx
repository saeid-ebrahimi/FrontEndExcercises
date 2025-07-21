import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header"
export default function RootLayout() {
    return (
        <>
            <Header />
            <div className={"container"}> <Outlet /></div>
        </>
    )
}
