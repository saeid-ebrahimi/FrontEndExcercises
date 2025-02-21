import { useState } from "react";
import { Alert, AlertTitle, Button } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

export function AlertFunctionality() {
    const [open, setOpen] = useState(true)
    const [openInfo, setOpenInfo] = useState(true)
    return (
        <>
            <Alert color={"secondary"} variant={"filled"} severity={"error"} >Something Happen!</Alert>
            <Alert variant={"outlined"} severity={"warning"} >Something Happen!</Alert>
            {openInfo && <Alert variant={"standard"}
                action={
                    <Button onClick={() => { setOpenInfo(false) }}
                        variant={"outlined"} color={"info"}>Delete</Button>
                }
                onClose={() => { setOpen(false) }} severity={"info"}
            >
                <AlertTitle>Do you noticed?</AlertTitle>
                Something Happen!</Alert>}
            {open && <Alert icon={<DeleteIcon />} severity={"success"} onClose={() => { setOpen(false) }} >
                <AlertTitle>Do you noticed?</AlertTitle>
                Something Happen!
            </Alert>}
        </>
    )
}
