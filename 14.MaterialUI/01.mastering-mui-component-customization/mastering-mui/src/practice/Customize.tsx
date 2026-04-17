import { Box, Button, ButtonGroup, buttonGroupClasses } from "@mui/material";

export function Customize() {
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <ButtonGroup sx={{
            "& > button": {
                bgcolor: "#E1293B",
                color: "#F1F5F9",
                "&:hover": {
                    bgcolor: "#334155",
                },
            },
            "& .MuiButtonGroup-grouped": {
                borderColor: "wheat",
                borderWidth: "3px",
            }
        }} variant={"text"}>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
        </ButtonGroup>
        <ButtonGroup sx={{
            "& > button": {
                bgcolor: "#E1293B",
                color: "#F1F5F9",
                "&:hover": {
                    bgcolor: "#334155",
                },
            },
            [`& .${buttonGroupClasses.grouped}`]: {
                borderColor: "wheat",
                borderWidth: "2px",
            },
        }} variant={"text"}>
            <Button>First</Button>
            <Button>Second</Button>
            <Button>Third</Button>
        </ButtonGroup>
    </Box>
};