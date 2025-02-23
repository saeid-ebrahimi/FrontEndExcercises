import { Button, Snackbar, Zoom, paperClasses } from "@mui/material";
import { useState } from "react";

export function SnackbarCustomizationUsingClassesObject() {
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
                action={<Button sx={{
                    color: "rgb(136, 19, 55)"
                }}>Undo</Button>}
                sx={{
                    [`& .${paperClasses.root}`]: {
                        bgcolor: "rgb(255, 228, 230)",
                        color: "rgb(136, 19, 55)",
                        fontFamily: "verdana",
                        maxWidth: "300px",
                        height: "100px"
                    }
                }}
            />
        </>
    )
}
