import { Box } from "@mui/material"
import "../App.css"
import { BoxDemo } from "../01.layout-patterns/HolyGrail/box"
import { Grid2Demo } from "../01.layout-patterns/HolyGrail/grid2"

export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "500px"
    }}>
        <BoxDemo />
        <Grid2Demo />
    </Box>
}