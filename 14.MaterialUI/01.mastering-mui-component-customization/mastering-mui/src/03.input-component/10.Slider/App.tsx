import { Box } from "@mui/material";
import { SliderFunctionality } from "./01.SliderFunctionality";
import { SliderCustomization } from "./02.SliderCustomization";
import { SliderCustomizationUsingClassesObject } from "./03.SliderCustomizationUsingClassesObject";

export default function App() {
    return <Box style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SliderFunctionality />
        <SliderCustomization />
        <SliderCustomizationUsingClassesObject />
    </Box>
}