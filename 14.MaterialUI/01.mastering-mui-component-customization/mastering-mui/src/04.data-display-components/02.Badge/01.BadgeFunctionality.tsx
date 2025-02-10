import { Avatar, Badge } from "@mui/material";
// import { Add as AddIcon } from "@mui/icons-material";

export function BadgeFunctionality() {
    return (
        <>
            <Badge color={"primary"}
                badgeContent={100}
                // badgeContent={"online"}
                // badgeContent={<AddIcon />}
                // invisible
                showZero
                max={10}

            >
                <Avatar aria-aria-label={"notifications counter"} />
            </Badge>
            <Badge
                overlap={"circular"}
                variant={"dot"}
                color={"secondary"}
                anchorOrigin={{
                    vertical: "bottom", horizontal: "left"
                }}
            >
                <Avatar aria-aria-label={"notifications counter"}
                // variant={"rounded"}
                />
            </Badge>
        </>
    )
}
