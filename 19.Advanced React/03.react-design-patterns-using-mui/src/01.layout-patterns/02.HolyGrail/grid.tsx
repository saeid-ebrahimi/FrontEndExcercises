import Grid from "@mui/material/Grid";

export function GridDemo() {
    return <Grid container direction={"column"} sx={{ height: "500px", width: "100%" }}>
        <Grid item flex={1} sx={{ bgcolor: "green" }}>Header</Grid>
        <Grid container direction={{ xs: "column", md: "row" }} item sx={{ bgcolor: "orange" }} flex={1}>
            <Grid flex={1} sx={{ bgcolor: "wheat" }}>Left</Grid>
            <Grid flex={3} sx={{ bgcolor: "white" }}>Main</Grid>
            <Grid flex={1} sx={{ bgcolor: "gray" }}>Right</Grid>
        </Grid>
        <Grid flex={1} sx={{ bgcolor: "blue" }}>Footer</Grid>
    </Grid>
}