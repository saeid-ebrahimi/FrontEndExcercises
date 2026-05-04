import { Box } from "@mui/material"
import "../App.css"
import { StackDemo } from "../01.layout-patterns/08.Stack/stackDemo"

export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "500px"
    }}>
        <StackDemo />
    </Box>
}