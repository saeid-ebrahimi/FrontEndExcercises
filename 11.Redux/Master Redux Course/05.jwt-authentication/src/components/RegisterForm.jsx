import React from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'

export default function RegisterForm() {
    return (
        <Form>
            <FormGroup className={"mb-3"} controlId={"registerForm"}>
                <FormLabel>First Name:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter First Name"} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"registerForm"}>
                <FormLabel>Last Name:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter Last Name"} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"registerForm"}>
                <FormLabel>Email Address:</FormLabel>
                <FormControl type={"email"} placeholder={"Enter Email"} />
                <FormText>we'll never share your email with anyone else</FormText>
            </FormGroup>
            <FormGroup className={"mb-3"}>
                <FormLabel>Password:</FormLabel>
                <FormControl type={"password"} placeholder={"Password"} />
            </FormGroup>
            <Button variant={"primary"} type={"submit"}>Register</Button>
        </Form>
    )
}
