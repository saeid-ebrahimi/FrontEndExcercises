import { Divider } from "@mui/material";
import { AlertFunctionality } from "./01.AlertFunctionality";
import { AlertCustomization } from "./02.AlertCustomization";
import { AlertCustomizationUsingClassesObject } from "./03.AlertCustomizationUsingClassesObject";

export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <AlertFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <AlertCustomization />
        <AlertCustomizationUsingClassesObject />
    </div>
}