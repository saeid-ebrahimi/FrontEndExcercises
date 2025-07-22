import React, { useEffect, useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { changeDataField, loginUser } from "../redux/user/user.slice";

export default function LoginForm() {
    const dispatch = useDispatch();
    const { data: userData, error, isAuthenticated } = useSelector(state => state.user)
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function onLogin(event) {
        event.preventDefault();
        dispatch(loginUser({ email: userData.email, password: password }))
        if (error) {
            console.log(error);
            return toast.error(error)
        }
        toast.success("user logged in successfully")
        setTimeout(() => {
            navigate("/post")
        }, [3000])
    }

    useEffect(() => {
        if (isAuthenticated) {
            toast.success("user is logged in.")
            setTimeout(() => {
                navigate("/post")
            }, [3000])
        }
    }, [])
    return (
        <Form onSubmit={onLogin} className={"mt-3"}>
            <FormGroup className={"mb-3"} controlId={"loginForm"}>
                <FormLabel>Email Address:</FormLabel>
                <FormControl type={"email"} placeholder={"Enter Email"} value={userData.email} onChange={(evt) => dispatch(changeDataField("email", evt.target.value))} />
                <FormText>we'll never share your email with anyone else</FormText>
            </FormGroup>
            <FormGroup className={"mb-3"}>
                <FormLabel>Password:</FormLabel>
                <FormControl type={"password"} placeholder={"Password"} value={password} onChange={(evt) => setPassword(evt.target.value)} />
            </FormGroup>
            <Button variant={"primary"} type={"submit"}>Login</Button>
        </Form>
    )
}
