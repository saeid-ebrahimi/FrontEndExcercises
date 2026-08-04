import { Box } from "@mui/material";

export function BoxDemo() {
    return <Box sx={{
        height: "500px",
        display: "grid",
        gridTemplateRows: {
            xs: "auto 1fr auto"
        },
        gridTemplateColumns: {
            xs: "1fr", md: "200px 1fr 200px"
        },
        gridTemplateAreas: {
            xs: `
                "header"
                "main"
                "left"
                "right"
                "footer"
            `,
            md: `
                "header header header"
                "left main right"
                "footer footer footer"
            `
        }
    }}>
        <Box component={"header"} sx={{
            gridArea: "header",
            bgcolor: "primary.main"
        }}>Header</Box>
        <Box component={"aside"} sx={{
            gridArea: "left",
            bgcolor: "secondary.main"
        }}>Left</Box>
        <Box component={"main"} sx={{
            gridArea: "main",
            bgcolor: "gray",
        }}>Main</Box>
        <Box component={"aside"} sx={{
            gridArea: "right",
            bgcolor: "red",
        }}>Right</Box>
        <Box component={"footer"} sx={{
            gridArea: "footer",
            bgcolor: "blue"
        }}>Footer</Box>
    </Box>
}