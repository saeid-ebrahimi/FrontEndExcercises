import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, setPosts } from "../redux/posts/posts.slice";

export function DeletePostModal({ postId, postTitle }) {
    const { data: posts } = useSelector(state => state.post)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true)
    const handleSubmitDelete = async (evt) => {
        evt.preventDefault();
        try {
            const response = dispatch(deletePost(postId));
            if (response.error) {
                throw new Error(response.error.message)
            }
            handleCloseModal();
            toast.success(`Post with title "${postTitle}" is deleted!`);
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <Button variant={"danger"} onClick={handleOpenModal}>Delete</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you really want to delete "{postTitle}" post?</p>
                    <div className={'d-flex gap-3'}>
                        <Button type={"button"} onClick={handleSubmitDelete} variant={"danger"}>Delete</Button>
                        <Button type={"button"} variant={"outline-danger"} onClick={() => {
                            handleCloseModal();
                        }}>Cancel</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}