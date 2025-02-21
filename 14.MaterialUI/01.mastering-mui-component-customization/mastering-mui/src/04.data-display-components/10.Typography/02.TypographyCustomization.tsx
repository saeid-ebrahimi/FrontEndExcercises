import { Typography } from "@mui/material";


export function TypographyCustomization() {
    return (
        <>
            <Typography sx={{ width: "100%", color: "#1E293B", bgcolor: "#E2E8F0", height: "100px", textAlign: "center", fontFamily: "Verdana", fontSize: "2rem", borderRadius: "2rem" }} component={"a"} variant={"overline"}>Button</Typography>
        </>
    )
}
