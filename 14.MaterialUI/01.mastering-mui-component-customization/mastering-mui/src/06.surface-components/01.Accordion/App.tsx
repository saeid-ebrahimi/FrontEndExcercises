import { Divider } from "@mui/material";
import { AccordionFunctionality } from "./01.AccordionFunctionality";
import { AccordionCustomization } from "./02.AccordionCustomization";
import { AccordionCustomizationUsingClassesObject } from "./03.AccordionCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <AccordionFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <AccordionCustomization />
        <AccordionCustomizationUsingClassesObject />
    </div>
}
