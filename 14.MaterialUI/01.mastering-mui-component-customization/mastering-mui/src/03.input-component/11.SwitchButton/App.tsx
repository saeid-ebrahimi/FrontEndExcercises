import { Box } from "@mui/material";
import { SwitchFunctionality } from "./01.SwitchFunctionality";
import { SwitchCustomization } from "./02.SwitchCustomization";
import { SwitchCustomizationUsingClassesObject } from "./03.SwitchCustomizationUsingClassesObject";

export default function App() {
    return <Box style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SwitchFunctionality />
        <SwitchCustomization />
        <SwitchCustomizationUsingClassesObject />
    </Box>
}