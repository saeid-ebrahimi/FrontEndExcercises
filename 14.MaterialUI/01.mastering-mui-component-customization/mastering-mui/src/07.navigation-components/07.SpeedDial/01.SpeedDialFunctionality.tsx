import { useState } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Button } from "@mui/material";
import {
    LocalPhone as LocalPhoneIcon,
    Message as MessageIcon, Email as EmailIcon,
    SupportAgent as SupportAgentIcon,
    ArrowLeft as ArrowLeftIcon
} from "@mui/icons-material";

export default function SpeedDialFunctionality() {

    const [openDial, setOpenDial] = useState(false)
    // const handleClose = () => setOpenDial(false)
    // const handleOpen = () => setOpenDial(true)

    const actions = [
        {
            icon: <LocalPhoneIcon />, name: "Phone", function: () => console.log("Make a Phone Call"),
        },
        {
            icon: <MessageIcon />, name: "Message", function: () => console.log("Leave A Message"),
        },
        {
            icon: <EmailIcon />, name: "Email", function: () => console.log("Send An Email"),
        }
    ]

    return (
        <div>
            <Button onClick={() => setOpenDial(prev => !prev)}> Open Action</Button>
            {/* <Button onClick={handleOpen}> Open Action</Button> */}
            <SpeedDial
                // hidden
                // onOpen={handleOpen}
                // onClose={handleClose}
                // onClick={() => setOpenDial(prev => !prev)}
                // open={openDial}
                direction={"left"}
                icon={<SpeedDialIcon
                    icon={<SupportAgentIcon />}
                    openIcon={<ArrowLeftIcon />} />}
                ariaLabel={"actions"}
                sx={{
                    position: "absolute", bottom: 150, right: 20,
                }}>
                {actions.map(action =>
                (<SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.function}
                />)
                )}
            </SpeedDial>
            <SpeedDial
                // hidden
                // onOpen={handleOpen}
                // onClose={handleClose}
                onClick={() => setOpenDial(prev => !prev)}
                open={openDial}
                direction={"left"}
                icon={<SpeedDialIcon
                    icon={<SupportAgentIcon />}
                    openIcon={<ArrowLeftIcon />} />}
                ariaLabel={"actions"}
                sx={{
                    position: "absolute", bottom: 80, right: 20,
                }}>
                {actions.map(action =>
                (<SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.function}
                />)
                )}
            </SpeedDial>
        </div >
    )
}
