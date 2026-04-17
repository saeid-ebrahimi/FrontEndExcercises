import { Box, Fab, } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
export function Customize() {

    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <Fab
            disabled
            variant={"extended"}
            sx={{
                bgcolor: "darkblue",
                color: "wheat",
                fontFamily: "Verdana",
                "&:hover": {
                    bgcolor: "blue"
                },
                "&.Mui-disabled": {
                    bgcolor: "#CBD5E1"
                }
            }}
        >
            <AddIcon />
            New User
        </Fab>
    </Box>
};