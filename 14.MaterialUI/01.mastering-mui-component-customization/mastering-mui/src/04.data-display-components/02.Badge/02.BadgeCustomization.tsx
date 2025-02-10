
import { Avatar, Badge } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export function BadgeCustomization() {
    const badgeStyles = {
        "& .MuiBadge-badge": {
            bgcolor: "#0F172A",
            color: "white",
            borderRadius: "50%",
            fontFamily: "verdana",
            width: "30px",
            height: "30px",
            fontSize: "0.6rem"
        }
    }
    return (
        <>
            <Badge color={"primary"}
                badgeContent={100}
                // badgeContent={"online"}
                // badgeContent={<AddIcon />}
                // invisible
                showZero
                max={10}
                sx={{
                    ...badgeStyles
                }}

            >
                <Avatar aria-aria-label={"notifications counter"} />
            </Badge>
            <Badge
                overlap={"circular"}
                badgeContent={<AddIcon />}
                sx={{
                    "& .MuiBadge-badge": {
                        bgcolor: "#0F172A",
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
                <Avatar aria-aria-label={"notifications counter"}
                // variant={"rounded"}
                />
            </Badge>
            <Badge
                overlap={"circular"}
                variant={"dot"}
                sx={{
                    ...badgeStyles,
                }}
            >
                <Avatar aria-aria-label={"notifications counter"}
                // variant={"rounded"}
                />
            </Badge>
        </>
    )
}
