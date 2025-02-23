import { Box, CircularProgress, LinearProgress } from "@mui/material";

export function ProgressCustomization() {
    return (
        <>
            <CircularProgress thickness={10} size={200} sx={{
                color: "#1E293B",
                animationDuration: "5s",
                "& .MuiCircularProgress-circle": {
                    animationDuration: "5s",
                }
            }} />
            <Box sx={{ width: "300px" }}>
                <LinearProgress sx={{
                    height: "20px",
                    borderRadius: "1rem",
                    bgcolor: "#E2E8F0",
                    "& .MuiLinearProgress-bar": {
                        bgcolor: "#1E293B",
                    }
                }} />
            </Box>
        </>
    )
}
