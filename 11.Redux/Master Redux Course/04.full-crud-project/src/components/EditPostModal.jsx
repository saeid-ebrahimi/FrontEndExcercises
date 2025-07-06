import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getPostById } from "../redux/posts/posts.slice";

export function EditPostModal({ postId, setPosts, posts }) {
    const [showModal, setShowModal] = useState(false);
    const [postTitle, setPostTitle] = useState()
    const [views, setViews] = useState()
    const dispatch = useDispatch()
    const handleCloseModal = () => setShowModal(false)
    const handleOpenModal = () => setShowModal(true)
    const handleSubmitEdit = async (evt) => {
        evt.preventDefault()
        try {
            const data = {
                title: postTitle,
                views: parseInt(views),
            }
            const resp = await axios.patch('http://localhost:3000/posts', data)
            setShowModal(false)
            const newPosts = posts.map(oldPost => {
                if (oldPost.id === postId) {
                    return { id: postId, title: data.title, views: parseInt(data.views) }
                } else {
                    return oldPost
                }
            })
            setPosts([...newPosts])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        dispatch(getPostById(postId))
    }, [])
    return (
        <>
            <Button variant={"dark"} onClick={handleOpenModal}>Edit</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit "{postTitle}" Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(evt) => { handleSubmitEdit(evt) }}>
                        <Form.Group className={"mb-3"} controlId={"formPostTitle"} >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={postTitle}
                                onChange={(evt) => setPostTitle(evt.target.value)}
                                placeholder={"Enter Post Title"}
                            />
                            <Form.Text className={"text-muted"} />
                        </Form.Group>
                        <Form.Group className={"mb-3"} controlId={"formPostViews"}>
                            <Form.Label>Views</Form.Label>
                            <Form.Control
                                value={views}
                                type={"number"}
                                onChange={(evt) => setViews(evt.target.value)}
                                placeholder={"views"}
                            />
                            <Form.Text className={"text-muted"} />
                        </Form.Group>
                        <div className={'d-flex gap-3'}>
                            <Button type={"submit"} variant={"primary"}>Edit Post</Button>
                            <Button type={"button"} variant={"outline-danger"} onClick={handleCloseModal}>Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal >

        </>
    )
}