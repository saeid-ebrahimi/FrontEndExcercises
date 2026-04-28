import Box from "@mui/material/Box";

export function BoxDemo() {

    return <Box component="section" sx={{
        display: "flex",
        height: 200
    }}>
        <Box flex={1} alignItems={"center"} sx={{
            backgroundColor: "green",
        }}>left</Box>
        <Box flex={2} sx={{
            backgroundColor: "greenyellow",
        }}>Middle</Box>
        <Box flex={3} sx={{
            backgroundColor: "yellow",
        }}>Right</Box>
    </Box>
}