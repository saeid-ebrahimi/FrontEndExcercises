import { Box } from "@mui/material";
import { FormComponentFunctionality } from "./01.FormComponentFunctionality";
import { FormComponentsCustomization } from "./02.FormComponentsCustomization";

export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <FormComponentFunctionality />
        <FormComponentsCustomization />
    </Box>
}