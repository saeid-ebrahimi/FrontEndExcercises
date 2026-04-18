import { Box } from "@mui/material";
import { SelectFunctionality } from "./01.SelectFunctionality";
import { SelectCustomization } from "./02.SelectCustomization";
import { SelectCustomizationUsingClassesObject } from "./03.SelectCustomizationUsingClassesObject";
export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SelectFunctionality />
        <SelectCustomization />
        <SelectCustomizationUsingClassesObject />
    </Box>
}