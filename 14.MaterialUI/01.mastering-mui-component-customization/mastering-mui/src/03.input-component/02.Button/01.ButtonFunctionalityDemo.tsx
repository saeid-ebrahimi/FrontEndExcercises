import { Button, IconButton } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useState } from "react";
export function ButtonFunctionalityDemo() {
    const [disabled, setDisabled] = useState(false)
    return (
        <div style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1rem"
        }}>
            <p><span style={{ fontWeight: "bold", color: "#1D4ED8" }}>contained buttons</span>: for <em style={{ fontWeight: "bold" }}>main</em> actions</p>
            <Button endIcon={<ArrowForwardIcon />} size={"large"} onClick={() => { console.log("Click Me!"); setDisabled(prev => !prev) }} variant={"contained"}>Publish</Button>
            <Button disabled={disabled} component={"a"} href={"https://www.google.com"} disableElevation disableRipple disableTouchRipple variant={"contained"}>Publish</Button>
            <p><span style={{ fontWeight: "bold", color: "#1D4ED8" }}>outlined buttons</span> : for <em style={{ fontWeight: "bold" }}>important</em> actions but not main</p>
            <Button variant={"outlined"}>Save as Draft</Button>
            <p><span style={{ fontWeight: "bold", color: "#1D4ED8" }}>text buttons</span> : for <em style={{ fontWeight: "bold" }}>less important</em> actions like <em style={{ fontWeight: "bold" }}>back, cancel and skip</em></p>
            <Button variant={"text"}>Cancel</Button>
            <IconButton color={"secondary"}>
                <ArrowForwardIcon />
            </IconButton>
        </div>
    )
}
