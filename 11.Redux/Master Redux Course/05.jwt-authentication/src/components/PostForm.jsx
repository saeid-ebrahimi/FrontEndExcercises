import React from 'react'
import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from 'react-bootstrap'

export default function PostForm() {
    return (
        <Form>
            <FormGroup className={"mb-3"} controlId={"postForm"}>
                <FormLabel>Post Title:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter Title"} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"postForm"}>
                <FormLabel>Post Description:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter Description"} />
            </FormGroup>
            <Button variant={"primary"} type={"submit"}>Create Post</Button>
        </Form>
    )
}
