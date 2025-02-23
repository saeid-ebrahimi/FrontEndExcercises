import { Button, Snackbar, Zoom } from "@mui/material";
import { useState } from "react";

export function SnackbarFunctionality() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(!open)}>Delete</Button>
            <Snackbar
                autoHideDuration={4000}
                TransitionComponent={Zoom}
                open={open}
                onClose={() => setOpen(false)}
                message={"The item is deleted!"}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                action={<Button color={"info"}>Undo</Button>}
            />
        </>
    )
}
