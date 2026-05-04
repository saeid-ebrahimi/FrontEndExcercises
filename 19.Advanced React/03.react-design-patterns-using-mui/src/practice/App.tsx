import { Box } from "@mui/material"
import "../App.css"
import { ContainerDemo } from "../01.layout-patterns/07.Full-Screen/02.container"

export default function App() {
    return <Box sx={{
        display: "flex",
        padding: 0,
        flexDirection: "column",
        gap: "2rem",
        // height: "500px"
    }}>
        <ContainerDemo />
    </Box>
}