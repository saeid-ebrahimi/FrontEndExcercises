import Stack from "@mui/material/Stack";

export default function StackDemo() {
    return (
        <>
            <Stack direction={"row"} height={100} bgcolor={"primary.main"} component={"header"}>
                Header
            </Stack>
            <Stack width={"100%"} height={{ xs: 300, sm: "calc(100% - 200px)" }} direction={{ xs: "column", sm: "row" }} >
                <Stack component={"aside"} height={{ xs: 1 / 3, sm: "300px" }} width={{ xs: "100%", sm: 200 }} bgcolor={"error.main"} direction={{ xs: "column", sm: "row" }}>Left</Stack>
                <Stack component={"main"} height={{ xs: 1 / 3, sm: "300px" }} width={{ xs: "100%", sm: "calc(100% - 400px)" }} bgcolor={"lightgrey"} direction={{ xs: "column", sm: "row" }} >Main</Stack>
                <Stack component={"aside"} height={{ xs: 1 / 3, sm: "300px" }} width={{ xs: "100%", sm: 200 }} bgcolor={"warning.main"} direction={{ xs: "column", sm: "row" }}>Right</Stack>
            </Stack>
            <Stack direction={"row"} height={100} bgcolor={"secondary.main"} component={"footer"}>
                Footer
            </Stack>
        </>
    )
}