import React from 'react'
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeDataField, createPost, resetData } from "../redux/post/post.slice"
import { useNavigate } from 'react-router-dom'
export default function PostForm() {
    const navigate = useNavigate()
    const post = useSelector(state => state.post);
    const dispatch = useDispatch();
    function handleCreatePost(evt) {
        evt.preventDefault();
        dispatch(createPost(post.data))
        navigate("/post")
        evt.target.reset()
        dispatch(resetData())
    }
    return (
        <Form onSubmit={handleCreatePost}>
            <FormGroup className={"mb-3"} controlId={"postTitle"}>
                <FormLabel>Post Title:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter Title"}
                    value={post.title}
                    onChange={(evt) => dispatch(changeDataField({ fieldName: "title", fieldValue: evt.target.value }))} />
            </FormGroup>
            <FormGroup className={"mb-3"} controlId={"postDescription"}>
                <FormLabel>Post Description:</FormLabel>
                <FormControl type={"text"} placeholder={"Enter Description"}
                    value={post.description}
                    onChange={(evt) => dispatch(changeDataField({ fieldName: "description", fieldValue: evt.target.value }))} />
            </FormGroup>
            <Button variant={"primary"} type={"submit"}>Create Post</Button>
        </Form>
    )
}
