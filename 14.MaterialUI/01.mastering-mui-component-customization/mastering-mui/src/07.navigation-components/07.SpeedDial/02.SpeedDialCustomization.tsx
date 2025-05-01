import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import {
    LocalPhone as LocalPhoneIcon,
    Message as MessageIcon, Email as EmailIcon,
    SupportAgent as SupportAgentIcon,
    ChevronRight as ChevronRightIcon
} from "@mui/icons-material";
export default function SpeedDialCustomization() {
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
        <div><SpeedDial
            // hidden
            FabProps={{
                sx: {
                    bgcolor: "#ca3500", width: "5rem", height: "5rem", "&:hover": {
                        bgcolor: "#ca3500",
                        opacity: 0.85
                    }
                }
            }}
            direction={"right"}
            icon={<SpeedDialIcon sx={{
                "& > svg": {
                    fontSize: "40px"
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
                icon={<SupportAgentIcon />}
                openIcon={<ChevronRightIcon />}
            />}
            ariaLabel={"actions"}
            sx={{
                position: "absolute", bottom: 20, left: 20,
            }}>
            {actions.map(action =>
            (<SpeedDialAction
                sx={{
                    width: "4rem",
                    height: "4rem",
                    bgcolor: "#ff8904",
                    color: "white",
                    ":hover": {
                        bgcolor: "#ff8904",
                        opacity: 0.85
                    }
                }}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.function}
            />)
            )}
        </SpeedDial></div>
    )
}
