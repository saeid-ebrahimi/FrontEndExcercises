import { Box } from "@mui/material";
import { CheckboxFunctionality } from "./01.CheckboxFunctionality";
import { CheckboxCustomization } from "./02.CheckboxCustomization";

export default function App() {
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <CheckboxFunctionality />
        <CheckboxCustomization />
    </Box>
}