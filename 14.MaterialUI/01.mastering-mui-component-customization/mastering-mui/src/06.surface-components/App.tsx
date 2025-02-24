import { Divider } from "@mui/material";
import { AccordionFunctionality } from "./01.Accordion/01.AccordionFunctionality";

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
    </div>
}
