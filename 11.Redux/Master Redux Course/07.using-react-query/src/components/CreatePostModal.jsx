import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { createPost } from "../apis";
// import { createPost } from "../redux/posts/posts.slice";
// import { useDispatch } from "react-redux";

export function CreatePostModal() {
    const [showModal, setShowModal] = useState(false);
    const [postTitle, setPostTitle] = useState()
    const [views, setViews] = useState()
    // const dispatch = useDispatch()
    const { isError, isPending, isSuccess, mutate, error } = useMutation({
        mutationFn: (postData) => createPost(postData),
    })

    const handleCloseModal = () => setShowModal(false)
    const handleOpenModal = () => setShowModal(true)

    const handleSubmitCreate = async (evt) => {
        evt.preventDefault();
        if (!views && !postTitle) return;
        const data = {
            title: postTitle,
            views: parseInt(views)
        }
        mutate(data);
    }

    useEffect(() => {
        if (isError) {
            toast.error(error.message)
        }
        else if (isSuccess) {
            toast.success("adding post was successful")
            setPostTitle("");
            setViews(undefined)
            handleCloseModal();
        } else if (isPending) {
            toast.info("adding post is in progress")
        }

    }, [isPending, isError, isSuccess])
    // const handleSubmitCreate = async (evt) => {
    //     evt.preventDefault();
    //     try {
    //         const data = {
    //             title: postTitle,
    //             views: parseInt(views),
    //         }
    //         const resp = dispatch(createPost(data))
    //         if (resp.error) {
    //             throw new Error(resp.error.message)
    //         }
    //         handleCloseModal()
    //         toast.success(`New Post with title "${postTitle}" has created!`)
    //         setPostTitle("")
    //         setViews(undefined)
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // }

    return (
        <>
            <Button variant={"primary"} onClick={handleOpenModal}>Create New Post</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create A Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(evt) => { if (!isPending) handleSubmitCreate(evt) }}>
                        <Form.Group className={"mb-3"} controlId={"formPostTitle"} >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
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
                                required
                                value={views}
                                type={"number"}
                                onChange={(evt) => setViews(evt.target.value)}
                                placeholder={"views"}
                            />
                            <Form.Text className={"text-muted"} />
                        </Form.Group>
                        <div className={'d-flex gap-3'}>
                            <Button disabled={isPending} type={"submit"} variant={"primary"}>Create Post</Button>
                            <Button type={"button"} variant={"outline-danger"} onClick={() => {
                                handleCloseModal();
                                setPostTitle("");
                                setViews(null);
                            }}>Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal >

        </>
    )
}