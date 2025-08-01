import { useState, type FormEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { changePostTitle, changePostViews, getPostById, updatePost } from "../redux/posts/posts.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export function EditPostModal({ postId }: { postId?: number; }) {
    const { post } = useAppSelector(state => state.post)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useAppDispatch()
    const handleCloseModal = () => setShowModal(false)
    const handleOpenModal = () => setShowModal(true)
    const handleGetData = async (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        if (postId) {
            dispatch(getPostById(postId));
            handleOpenModal();
        }
    }
    const handleSubmitEdit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            const data = {
                id: postId,
                title: post.title,
                views: post.views,
            }
            dispatch(updatePost(data))
            setShowModal(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Button variant={"primary"} onClick={handleGetData}>Edit</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit "{post.title}" Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(evt) => { handleSubmitEdit(evt) }}>
                        <Form.Group className={"mb-3"} controlId={"formPostTitle"} >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={post.title}
                                onChange={(evt) => dispatch(changePostTitle(evt.target.value))}
                                placeholder={"Enter Post Title"}
                            />
                            <Form.Text className={"text-muted"} />
                        </Form.Group>
                        <Form.Group className={"mb-3"} controlId={"formPostViews"}>
                            <Form.Label>Views</Form.Label>
                            <Form.Control
                                value={post.views}
                                type={"number"}
                                onChange={(evt) => dispatch(changePostViews(parseInt(evt.target.value)))}
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