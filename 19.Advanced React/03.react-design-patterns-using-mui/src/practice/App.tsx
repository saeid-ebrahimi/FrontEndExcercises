import { Box } from "@mui/material"
import "../App.css"

import { GridDemo } from "../01.layout-patterns/06.Bento/grid"
export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "500px"
    }}>
        <GridDemo />
    </Box>
}