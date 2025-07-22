import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import { ToastContainer } from "react-toastify";
export default function RootLayout() {
    return (
        <>
            <Header />
            <div className={"container mt-4"}> <Outlet /></div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
