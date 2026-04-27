import { Box } from "@mui/material"
import "../App.css"
import { BoxDemo } from "../01.layout-patterns/HolyGrail/Box"
import { GridDemo } from "../01.layout-patterns/HolyGrail/grid"

export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "500px"
    }}>
        <BoxDemo />
        <GridDemo />
    </Box>
}