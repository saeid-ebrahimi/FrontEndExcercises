import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { deletePost, } from "../redux/posts/posts.slice";
import { useAppDispatch, } from "../redux/hooks";

export function DeletePostModal({ postId, postTitle }: { postId?: number; postTitle: string; }) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useAppDispatch();
    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true)
    const handleSubmitDelete = async (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        try {
            if (postId) {
                dispatch(deletePost(postId));
                handleCloseModal();
                toast.success(`Post with title "${postTitle}" is deleted!`);
            }
        } catch (error) {
            toast.error((error as Error).message)
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