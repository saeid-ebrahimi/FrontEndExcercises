import Grid from "@mui/material/Grid";

export function GridDemo() {
    return <Grid container gap={2} component={"main"} justifyContent={"center"} alignItems={"center"} >
        <Grid item flex={1} >test</Grid>
        <Grid item flex={1}>test2</Grid>
        <Grid item container flex={{ xs: 2, md: 5 }} justifyContent={"between"}>
            <Grid item flex={1}>test2</Grid>
            <Grid item flex={3}>test2</Grid>
        </Grid>
    </Grid>
}