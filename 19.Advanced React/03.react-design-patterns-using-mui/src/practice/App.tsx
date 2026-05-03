import { Box } from "@mui/material"
import "../App.css"
import { ContainerDemo } from "../01.layout-patterns/05.Centered/container"
export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "500px"
    }}>
        <ContainerDemo />
    </Box>
}