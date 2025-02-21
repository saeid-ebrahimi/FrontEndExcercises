import { Alert, AlertTitle, alertClasses } from "@mui/material"
import { useState } from "react"
import { Delete as DeleteIcon } from "@mui/icons-material";


export function AlertCustomizationUsingClassesObject() {
    const [open, setOpen] = useState(true)
    return (
        <>
            {open && <Alert sx={{
                width: "300px",
                height: "100px",
                color: "#A5F3FC",
                bgcolor: "#083344",
                fontSize: "1rem",
                fontFamily: "verdana",
                [`& .${alertClasses.icon}`]: {
                    color: "#A5F3FC",
                    "& > svg": {
                        fontSize: "2rem"
                    }
                },
                [`& .${alertClasses.action}`]: {
                    color: "#A5F3FC",
                    "& > button > svg": {
                        fontSize: "2rem"
                    }
                }
            }} icon={<DeleteIcon />} severity={"success"} onClose={() => { setOpen(false) }} >
                <AlertTitle sx={{
                    fontSize: "1.2rem",
                    fontFamily: "verdana",
                    color: "#A5F3FC",
                }}>Do you noticed?</AlertTitle>
                Something Happen!
            </Alert>}
        </>
    )
}
