import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";


export function BackdropFunctionality() {
    const [open, setOpen] = useState(true)
    return (
        <>
            <Backdrop sx={{ bgcolor: "rgb(139, 92, 246, 0.3)" }} transitionDuration={1000} open={open} onClick={() => { setOpen(false) }}>
                <CircularProgress />
            </Backdrop>
        </>
    )
}
