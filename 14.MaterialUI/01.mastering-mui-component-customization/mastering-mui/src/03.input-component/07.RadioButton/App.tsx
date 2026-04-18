import { Box } from "@mui/material";
import { RadioButtonFunctionality } from "./01.RadioButtonFunctionality";
import { RadioButtonCustomization } from "./02.RadioButtonCustomization";
import { RadioButtonCustomizationUsingClassesObject } from "./03.RadioButtonCustomizationUsingClassesObject";

export default function App() {
    return <Box style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <RadioButtonFunctionality />
        <RadioButtonCustomization />
        <RadioButtonCustomizationUsingClassesObject />
    </Box>
}