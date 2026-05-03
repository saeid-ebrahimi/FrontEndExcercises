import { Grid2 as Grid } from "@mui/material";

export function GridDemo() {

    return <Grid direction={{ lg: "row-reverse" }} sx={{
        minHeight: "100vh",

    }} container>
        <Grid component={"main"} sx={{
            bgcolor: "wheat"
        }} size={{ xs: 12, lg: 8 }}></Grid>
        <Grid component={"aside"} sx={{
            bgcolor: "whitesmoke"
        }} size={{ xs: 12, lg: 4 }}></Grid>
    </Grid>
}