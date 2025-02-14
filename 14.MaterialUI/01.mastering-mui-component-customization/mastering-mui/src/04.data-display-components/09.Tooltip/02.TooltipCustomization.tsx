import { Button, Tooltip, Zoom } from "@mui/material";


export function TooltipCustomization() {
    return (
        <Tooltip
            describeChild
            arrow
            followCursor
            title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore natus, cum sunt voluptatibus rem. Enim ullam porro dolores nostrum unde rerum consequatur excepturi at, itaque ex quas similique quod!"}
            // title={<Button sx={{ color: "white" }}>Hello</Button>}
            placement={"top"}
            slots={{
                transition: Zoom
            }}
            slotProps={{
                transition: {
                    timeout: 600
                },
                tooltip: {
                    sx: {
                        maxWidth: 200,
                        padding: 1,
                        bgcolor: "#0F172A",
                        color: "#E2E8F0",
                        fontSize: "0.7rem",
                        lineHeight: "1.2rem",
                        fontFamily: "verdana",

                    }
                },
                arrow: {
                    sx: {
                        color: "#0F172A",
                    }
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
    )
}
