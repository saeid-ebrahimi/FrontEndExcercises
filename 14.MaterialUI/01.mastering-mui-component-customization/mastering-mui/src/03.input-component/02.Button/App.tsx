import { Box } from "@mui/material";
import { ButtonFunctionalityDemo } from "./01.ButtonFunctionalityDemo";
import { ButtonCustomizationDemo } from "./02.ButtonCustomizationDemo";

export default function App() {
    return <Box sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
    }}>
        <ButtonFunctionalityDemo />
        <ButtonCustomizationDemo />
    </Box>
}