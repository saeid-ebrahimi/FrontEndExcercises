import { Grid, Divider } from '@mui/material';

export default function GridCustomization() {
    return (
        <div>
            <h1>Grid Functionality</h1>
            <Grid container
                // spacing={4}
                sx={{
                    "& > .MuiGrid-item": {
                        margin: 2,
                    }
                }}
                direction={"column-reverse"} justifyContent={"space-between"} alignItems={"center"} height={"200px"}>
                <Grid bgcolor={"lightblue"} item container justifyContent={"space-around"}>
                    <Grid item>Inner Item </Grid>
                    <Grid item>Another Inner Item </Grid>
                </Grid>
                <Grid bgcolor={"lightblue"} item>Another Item</Grid>
            </Grid>
            <Divider />
            <br />
            <Grid container
                // direction={matchesMD ? "column" : "row"}
                direction={{ md: "row", xs: "column" }}
                justifyContent={"space-between"} gap={"2rem"}>
                <Grid item md={5} xs={12}>
                    <Grid container gap={"1rem"}>
                        <Grid zeroMinWidth bgcolor={"lightcoral"} item borderRadius={3}>
                            Item 1
                        </Grid>
                        <Grid bgcolor={"lightcyan"} item border={"2px solid gray"}>Item 2</Grid>
                        <Grid bgcolor={"lightgreen"} item>Item 3</Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid container columns={{ md: 12, sm: 6, xs: 3 }} gap={"8px"} justifyContent={"space-between"} width={"30rem"}>
                        <Grid bgcolor={"lightgray"} item xs={3}>Another Item 1</Grid>
                        <Grid bgcolor={"lightpink"} item xs={3}>Another Item 2</Grid>
                        <Grid bgcolor={"lightsalmon"} item container direction={"column"}
                            // xs={"auto"}
                            xs={4}
                        >Another Item 3</Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}
