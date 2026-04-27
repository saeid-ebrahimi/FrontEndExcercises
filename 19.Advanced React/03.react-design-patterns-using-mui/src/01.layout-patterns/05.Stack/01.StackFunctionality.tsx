import { Chip, Stack, Divider } from "@mui/material";

export default function StackFunctionality() {
    return (
        <div>
            <Stack direction={"row"} justifyContent={"space-evenly"} spacing={2}>
                <Chip label={"Chip 1"} />
                <Chip label={"Chip 2"} />
                <Chip label={"Chip 3"} />
                <Chip label={"Chip 4"} />
                <Chip label={"Chip 5"} />
                <Chip label={"Chip 6"} />
            </Stack>
            <hr />
            <Stack direction={"column"}
                // divider={<div style={{ width: "50%", display: "flex", justifyContent: "center" }}>-</div>}
                divider={<Divider flexItem />}
                height={"400px"} alignItems={"end"} justifyContent={"space-around"} spacing={2}>
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
