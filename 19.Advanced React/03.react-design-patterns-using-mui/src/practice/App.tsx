import { Box } from "@mui/material"
import "../App.css"
import { DrawerDemo } from "../01.layout-patterns/04.Sidebar/drawer"
export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        height: "500px"
    }}>
        <DrawerDemo />
    </Box>
}