import { Grid2 as Grid } from "@mui/material";

export function Grid2Demo() {
    return <Grid container width="100%">
        <Grid size={{ xs: 12 }} order={{ xs: 1, md: "initial" }}>Header</Grid>
        <Grid size={{ xs: 12, md: 2 }} order={{ xs: 3, md: "initial" }} maxWidth={{ md: "200px" }}>Left</Grid>
        <Grid size={{ xs: 12, md: "grow" }} order={{ xs: 2, md: "initial" }} >Middle</Grid>
        <Grid size={{ xs: 12, md: 2 }} order={{ xs: 4, md: "initial" }} maxWidth={{ md: "200px" }}>Right</Grid>
        <Grid size={{ xs: 12 }} order={{ xs: 5, md: "initial" }}>Footer</Grid>
    </Grid>
}