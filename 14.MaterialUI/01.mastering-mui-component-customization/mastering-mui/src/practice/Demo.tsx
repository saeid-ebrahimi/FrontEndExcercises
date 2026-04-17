import { Add as AddIcon } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";

export function Demo() {
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <Fab variant={"extended"}>
            <AddIcon />
            New User
        </Fab>
    </Box>
}