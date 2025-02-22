import { Divider } from "@mui/material";
import { DialogFunctionality } from "./01.DialogFunctionality";
import { DialogCustomization } from "./02.DialogCustomization";
import { DialogCustomizationUsingClassesObject } from "./03.DialogCustomizationUsingClassesObject";

export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <DialogFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <DialogCustomization />
        <DialogCustomizationUsingClassesObject />
    </div>
}