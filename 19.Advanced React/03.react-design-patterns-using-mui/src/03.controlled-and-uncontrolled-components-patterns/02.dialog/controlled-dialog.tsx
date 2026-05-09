import { Button } from "@mui/material";
import { useState } from "react"
import { MyDialog } from "./my-dialog";

export function ControlledDialog() {
    const [showDialog, setShowDialog] = useState(false);
    return <>
        <Button onClick={() => { setShowDialog(true) }}>
            Show Dialog
        </Button>
        <MyDialog showDialog={showDialog} onCloseDialog={() => setShowDialog(false)} />
    </>
}