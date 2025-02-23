import { Box, CircularProgress, LinearProgress, circularProgressClasses, linearProgressClasses } from "@mui/material";

export function ProgressCustomizationUsingClassesObject() {
    return (
        <>
            <CircularProgress thickness={10} size={200} sx={{
                color: "#1E293B",
                animationDuration: "5s",
                [`& .${circularProgressClasses.circle}`]: {
                    animationDuration: "3s",
                }
            }} />
            <Box sx={{ width: "300px" }}>
                <LinearProgress sx={{
                    height: "20px",
                    borderRadius: "1rem",
                    bgcolor: "#E2E8F0",
                    [`& .${linearProgressClasses.bar}`]: {
                        bgcolor: "#1E293B",
                    }
                }} />
            </Box>
        </>
    )
}
