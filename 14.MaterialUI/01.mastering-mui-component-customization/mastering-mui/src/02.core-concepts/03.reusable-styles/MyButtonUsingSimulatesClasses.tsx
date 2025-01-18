import { Button, Stack } from "@mui/material"
import { blueTextClass } from "./styles"



export function MyButtonUsingSimulatesClasses() {

    return <Stack spacing={2} direction={"row"}>
        <Button sx={blueTextClass}>Contained</Button>
    </Stack>
}