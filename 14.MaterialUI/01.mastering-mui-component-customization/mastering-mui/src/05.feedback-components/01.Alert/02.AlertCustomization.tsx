import { Alert, AlertTitle } from "@mui/material"
import { useState } from "react"
import { Delete as DeleteIcon } from "@mui/icons-material";

export function AlertCustomization() {
    const [open, setOpen] = useState(true)
    return (
        <>
            {open && <Alert sx={{
                width: "300px",
                height: "100px",
                color: "#D9F99D",
                bgcolor: "#365314",
                fontSize: "1rem",
                fontFamily: "verdana",
                "& .MuiAlert-icon": {
                    color: "#D9F99D",
                    "& > svg": {
                        fontSize: "2rem"
                    }
                },
                "& .MuiAlert-action": {
                    color: "#D9F99D",
                    "& > button > svg": {
                        fontSize: "2rem"
                    }
                }
            }} icon={<DeleteIcon />} severity={"success"} onClose={() => { setOpen(false) }} >
                <AlertTitle sx={{
                    fontSize: "1.2rem",
                    fontFamily: "verdana",
                    color: "#D9F99D",
                }}>Do you noticed?</AlertTitle>
                Something Happen!
            </Alert>}
        </>
    )
}
