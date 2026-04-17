import { Box, Button, ButtonGroup, Checkbox, } from "@mui/material";

export function Demo() {
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <Checkbox
            defaultChecked={true}
            disabled={true}
        />
    </Box>
}