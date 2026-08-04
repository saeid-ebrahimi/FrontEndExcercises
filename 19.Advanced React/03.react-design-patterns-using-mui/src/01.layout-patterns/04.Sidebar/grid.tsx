import { Grid2 as Grid } from "@mui/material";

export function GridDemo() {

    return <Grid direction={{ lg: "row-reverse" }} sx={{
        minHeight: "100vh",

    }} container>
        <Grid component={"main"} bgcolor={"wheat"} size={{ xs: 12, lg: 8 }}>Main</Grid>
        <Grid component={"aside"} bgcolor={"whitesmoke"} size={{ xs: 12, lg: 4 }}>Aside</Grid>
    </Grid>
}