import { Box } from "@mui/material";
import { ButtonGroupFunctionality } from "./01.ButtonGroupFunctionality";
import { ButtonGroupCustomization } from "./02.ButtonGroupCustomization";

export default function App() {
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <ButtonGroupFunctionality />
        <ButtonGroupCustomization />
    </Box>
}