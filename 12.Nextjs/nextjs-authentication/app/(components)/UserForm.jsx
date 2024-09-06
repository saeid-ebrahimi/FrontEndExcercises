"use client"
import {useRouter} from "next/navigation";
import React, {Fragment, useState} from "react";
const UserForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const handleChange = (evt) => {
        const value = evt.target.value
        const name = evt.target.name
        setFormData((prevState)=> ({...prevState,[name]:value}))
    }
    const handleSubmit = async (evt)=> {
        evt.preventDefault();
        setErrorMessage("")
        const res = await fetch("/api/Users", {
            method: "POST",
            body:JSON.stringify(formData),
            headers: [
                {"Content-Type": "applicationj/json"}
            ]
        })
        if (!res.ok){
            const res = await res.json()
            setErrorMessage(res.message)
        }else {
            router.refresh();
            router.push("/");
        }
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit} method={"post"} className={"flex flex-col gap-3 w-1/2"}>
                <h1>Create New User</h1>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id={"name"} name={"name"} onChange={handleChange} required={true} className={"m-2 bg-slate-400 rounded"} value={formData.name}/>
                <label htmlFor="email">Email:</label>
                <input type="email" name={"email"} onChange={handleChange} required={true} className={"m-2 bg-slate-400 rounded"} value={formData.email}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id={"password"} name={"password"} onChange={handleChange} required={true} value={formData.password} className={"m-2 bg-slate-400 rounded"}/>
                <input type="submit" value={"Create User"} className={"bg-blue-300 hover:bg-blue-100"}/>
            </form>
            <p className={"text-red-500"}>{errorMessage}</p>
        </Fragment>
    )
}
export default UserForm;