import { Box } from "@mui/material"
import { Demo } from "./Demo"
import { Customize } from "./Customize"
import { CustomizeUsingComponentClasses } from "./CustomizeUsingComponentClasses"
import "../App.css"
export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
    }}>
        <Demo />
        <Customize />
        <CustomizeUsingComponentClasses />
    </Box>
}