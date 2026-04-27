import { Box } from "@mui/material"
import "../App.css"
import { GridDemo } from "../01.layout-patterns/SplitScreen/grid"

export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
    }}>
        <GridDemo />

    </Box>
}