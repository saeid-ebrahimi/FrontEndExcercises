import { Button, Snackbar, Zoom } from "@mui/material";
import { useState } from "react";

export function SnackbarCustomization() {
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
                    color: "rgb(30, 41, 59)"
                }}>Undo</Button>}
                sx={{
                    "& .MuiPaper-root": {
                        bgcolor: "rgb(226, 232, 240)",
                        color: "rgb(30, 41, 59)",
                        fontFamily: "verdana",
                        maxWidth: "300px",
                        height: "100px"
                    }
                }}
            />
        </>
    )
}


