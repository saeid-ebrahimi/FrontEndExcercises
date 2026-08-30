import { useState } from "react";
import Button from "@mui/material/Button";
import { Card } from "./01.named-sub-components-compound-composition";
import { Dialog } from "./02.encapsulated-compound-composition";

export default function App() {
    const [open, setOpen] = useState(false);
    function handleClose() {
        setOpen(false);
    }
    function handleDelete() {
        alert("item deleted");
        handleClose();
    }
    return <>
        <Card>
            <Card.Header>
                Test Header
            </Card.Header>
            <Card.Content>
                there is card content
            </Card.Content>
            <Card.Actions>
                <Button>Click</Button>
            </Card.Actions>
        </Card>
        <Button onClick={() => { setOpen(true) }}>Open</Button>
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
        >
            <Dialog.Header>
                <Dialog.Title>
                    Delete Account
                </Dialog.Title>
                <Dialog.Description>
                    Are you sure you want to delete this account?
                </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
                This action cannot be undone.
            </Dialog.Body>
            <Dialog.Footer>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </Dialog.Footer>
        </Dialog>
    </>

}