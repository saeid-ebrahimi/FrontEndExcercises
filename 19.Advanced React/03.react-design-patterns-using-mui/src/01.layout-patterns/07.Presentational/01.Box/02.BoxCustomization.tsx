import { Box, Typography } from "@mui/material";

export default function BoxCustomization() {
    return (
        <Box
            component={"main"}
            bgcolor={"#c6d2ff"}
            borderRadius={"2rem"}
            padding={(theme) => theme.spacing(4)}>
            <Typography variant={"h2"}>Box Customization</Typography>
        </Box>
    )
}
