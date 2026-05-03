import { Box } from "@mui/material";

export function BoxDemo() {
    return <Box sx={{
        display: "flex",
        width: "100%",
        flexDirection: { xs: "column", lg: "row-reverse" },
        minHeight: "100vh"
    }}>
        <Box component={"aside"} sx={{
            bgcolor: "lightgray",
            width: { xs: "100%", lg: "75%" }
        }}>Main</Box>
        <Box component={"aside"} sx={{
            bgcolor: "lightblue",
            width: { xs: "100%", lg: "25%" }
        }}>Side bar</Box>
    </Box>

}
