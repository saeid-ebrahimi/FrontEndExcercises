import { AppBar, Button, styled, Toolbar } from "@mui/material";

const Offset = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
    height: `${theme.mixins.toolbar.minHeight}px + 1rem`
}))
export function AppBarCustomization() {
    return (
        <>
            <AppBar
                // position={"sticky"}
                // for mobile menu
                // sx={{ bottom: 0, top: "auto" }}
                sx={{
                    bgcolor: "rgb(15, 23, 42)", height: "5rem", justifyContent: "center"
                }}
            >
                <Toolbar variant={"dense"} sx={{ justifyContent: "space-between" }}>
                    <div>Logo</div>
                    <div style={{ display: "flex", justifyContent: "space-around", gap: "1rem" }}>
                        <div>Home</div>
                        <div>Contact Us</div>
                    </div>
                    <div>
                        <Button sx={{ color: "white" }} variant={"text"}>Login</Button>
                        <Button sx={{ color: "white" }} variant={"text"}>Sign Up</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Offset />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illo molestiae, sapiente facilis provident quasi, ipsam nisi aperiam a, voluptas iste? Consequuntur ab itaque consequatur aliquid possimus atque, animi beatae.</h2>
            <div style={{ height: "150rem" }} />
        </>
    )
}
