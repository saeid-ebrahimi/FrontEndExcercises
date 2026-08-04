import { Box } from "@mui/material";

export function BoxDemo() {
    return (
        <Box display={"flex"} minHeight={"100vh"} width={"100%"} flexDirection={{ xs: "column", lg: "row-reverse" }}>
            <Box component={"main"} bgcolor={"lightgray"} width={{ xs: "100%", lg: "75%" }}>Main</Box>
            <Box component={"aside"} bgcolor={"lightblue"} width={{ xs: "100%", lg: "25%" }}>Side bar</Box>
        </Box>
    )

}
