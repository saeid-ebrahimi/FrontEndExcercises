import { Add as AddIcon } from "@mui/icons-material";
import { Avatar, Badge, badgeClasses } from "@mui/material";

export function BadgeCustomizationUsingClassesObject() {
    return (
        <>
            <Badge
                overlap={"circular"}
                badgeContent={<AddIcon />}
                sx={{
                    [`& .${badgeClasses.badge}`]: {
                        bgcolor: "#065F46",
                        color: "white",
                        borderRadius: "50%",
                        fontFamily: "verdana",
                        width: "20px",
                        height: "20px",
                        fontSize: "0.6rem",
                        "& > svg": {
                            height: "15px",
                        }
                    },

                }}
            >
                <Avatar sx={{
                    bgcolor: "#CBD5E1"
                }} aria-aria-label={"notifications counter"}
                // variant={"rounded"}
                />
            </Badge>
        </>
    )
}
