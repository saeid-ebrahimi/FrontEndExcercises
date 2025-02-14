import { Button, Tooltip, Zoom } from "@mui/material";
import { useState, forwardRef } from "react";

const MyButton = forwardRef<HTMLButtonElement>((props, ref) => {
    return <button {...props} ref={ref}>My Custom Button!</button>
})
export function TooltipFunctionality() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                describeChild
                arrow
                disableFocusListener
                disableHoverListener
                disableInteractive
                disableTouchListener
                followCursor
                title={"create an item"}
                placement={"top"}
                open={open}
                onOpen={() => { setOpen(true) }}
                onClose={() => { setOpen(false) }}
                slots={{
                    transition: Zoom
                }}
                slotProps={{
                    transition: {
                        timeout: 600
                    }
                }}
            >
                <Button
                    onBlur={() => { setOpen(false) }}
                    onClick={() => { setOpen(true) }}>Create</Button>
            </Tooltip>
            <Tooltip
                describeChild
                arrow
                followCursor
                enterDelay={1000}
                leaveDelay={1000}
                title={"create an item"}
                placement={"top"}
                slots={{
                    transition: Zoom
                }}
                slotProps={{
                    transition: {
                        timeout: 600
                    }
                }}
            >
                <span style={{ display: "block" }}>
                    <Button disabled
                    >
                        +
                    </Button>
                </span>
            </Tooltip>
            <Tooltip
                describeChild
                arrow
                followCursor
                enterDelay={1000}
                leaveDelay={1000}
                title={"create an item"}
                placement={"top"}
                slots={{
                    transition: Zoom
                }}
                slotProps={{
                    transition: {
                        timeout: 600
                    }
                }}
            >
                <span style={{ display: "block" }}>
                    <MyButton />

                </span>
            </Tooltip>
        </>
    )
}
