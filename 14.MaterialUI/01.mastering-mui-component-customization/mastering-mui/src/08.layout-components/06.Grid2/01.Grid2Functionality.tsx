import { Box, Grid2 as Grid, Typography } from "@mui/material";

export function Grid2Functionality() {
    return <Box sx={{
        width: "100%",
    }}>
        <Typography component={"h1"}>Grid Functionality</Typography>
        <Grid width={"100%"} container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>ww</Grid>
            <Grid container spacing={2} size={{ xs: 12, md: 8 }}>
                <Grid size={{ xs: 4 }}>Left</Grid>
                <Grid size={{ xs: 2 }}>Middle</Grid>
                <Grid size={{ xs: 6 }}>Right</Grid>
            </Grid>
        </Grid>
    </Box>
}