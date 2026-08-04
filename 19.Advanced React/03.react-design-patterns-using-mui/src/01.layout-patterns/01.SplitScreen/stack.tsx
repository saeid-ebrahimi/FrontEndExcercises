import Stack from "@mui/material/Stack";

export function StackDemo() {
    return <Stack direction={"row"} component={"section"}>
        <Stack flex={1} alignItems={"center"} sx={{
            backgroundColor: "green",
        }}>left</Stack>
        <Stack flex={2} sx={{
            backgroundColor: "greenyellow",
        }}>Middle</Stack>
        <Stack flex={3} sx={{
            backgroundColor: "lightblue",
        }}>Right</Stack>
    </Stack>
}