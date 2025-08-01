import React, { useEffect, useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeDataField, registerUser } from "../redux/user/user.slice"
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function RegisterForm() {
    const dispatch = useDispatch();
    const { data: userData, error, isAuthenticated } = useSelector(state => state.user);
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function onRegister(event) {
        event.preventDefault()
        dispatch(registerUser({ firstName: userData.firstName, lastName: userData.lastName, email: userData.email, password: password }))
        if (error) {
            console.log(error);
            return toast.error(error)
        }
        toast.success("user registration was successfully")
        setTimeout(() => {
            navigate("/post")
        }, [3000])
    }

    useEffect(() => {
        if (isAuthenticated) {
            toast.success("you are logged in.")
            setTimeout(() => {
                navigate("/post")
            }, [3000])
        }
    }, [])
    return (
        <Form onSubmit={onRegister}>
            <FormGroup className={"mb-3"} controlId={"firstName"}>
                <FormLabel>First Name:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter First Name"} value={userData.firstName} onChange={(evt) => dispatch(changeDataField({ fieldName: "firstName", fieldValue: evt.target.value }))} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"lastName"} >
                <FormLabel>Last Name:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter Last Name"} value={userData.lastName} onChange={(evt) => dispatch(changeDataField({ fieldName: "lastName", fieldValue: evt.target.value }))} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"email"} >
                <FormLabel>Email Address:</FormLabel>
                <FormControl type={"email"} placeholder={"Enter Email"} value={userData.email} onChange={(evt) => dispatch(changeDataField({ fieldName: "email", fieldValue: evt.target.value }))} />
                <FormText>we'll never share your email with anyone else</FormText>
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"password"} >
                <FormLabel>Password:</FormLabel>
                <FormControl type={"password"} placeholder={"Password"} value={password} onChange={(evt) => setPassword(evt.target.value)} />
            </FormGroup>
            <Button variant={"primary"} type={"submit"}>Register</Button>
        </Form>
    )
}
