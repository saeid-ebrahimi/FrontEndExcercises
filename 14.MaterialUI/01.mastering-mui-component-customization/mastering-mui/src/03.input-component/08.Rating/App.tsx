import { Box } from "@mui/material";
import { RatingFunctionality } from "./01.RatingFunctionality";
import { RatingCustomization } from "./02.RatingCustomization";
import { RatingCustomizationUsingClassesObject } from "./03.RatingCustomizationUsingClassesObject";

export default function App() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <RatingFunctionality />
        <RatingCustomization />
        <RatingCustomizationUsingClassesObject />
    </Box>
}