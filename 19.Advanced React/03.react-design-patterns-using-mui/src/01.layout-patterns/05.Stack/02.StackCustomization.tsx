import { Chip, Stack, Divider, useTheme, useMediaQuery } from "@mui/material";

export default function StackCustomization() {
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.up("sm"))
    return (
        <div>
            <Stack
                direction={{ xs: "column", sm: "row" }}

                divider={<Divider flexItem orientation={matchesSM ? "vertical" : "horizontal"} />}

                borderRadius={"2rem"}
                alignItems={"center"}
                justifyContent={{ xs: "center", sm: "space-between" }}
                spacing={2}>
                <Chip sx={{ width: "50%", py: "0.5rem" }} label={"Chip 1"} />
                <Chip sx={{ width: "50%", py: "0.5rem" }} label={"Chip 2"} />
                <Chip sx={{ width: "50%", py: "0.5rem" }} label={"Chip 3"} />
                <Chip sx={{ width: "50%", py: "0.5rem" }} label={"Chip 4"} />
                <Chip sx={{ width: "50%", py: "0.5rem" }} label={"Chip 5"} />
                <Chip sx={{ width: "50%", py: "0.5rem" }} label={"Chip 6"} />
            </Stack>
        </div>
    )
}
