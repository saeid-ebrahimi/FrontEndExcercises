import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function AppModal({ trigger, title, action, content, footer }) {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false)
    const handleOpenModal = () => setShowModal(true)

    return (
        <>
            <Button variant={trigger.variant} onClick={handleOpenModal}>{trigger.text}</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                {<Modal.Footer>
                    {footer ? footer : ""}
                    <Button onClick={() => {
                        action.func()
                        handleCloseModal()
                    }}>{action.text}</Button>
                    <Button onClick={handleCloseModal} variant={"secondary"}>close</Button>
                </Modal.Footer>}
            </Modal>

        </>
    )
}