import { Box } from "@mui/material"
import "../App.css"
import { BoxDemo } from "../01.layout-patterns/02.HolyGrail/box"
import { Grid2Demo } from "../01.layout-patterns/03.GridCard/grid2"
import { ImageListDemo } from "../01.layout-patterns/03.GridCard/image-list"

export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "500px"
    }}>
        <ImageListDemo />
    </Box>
}