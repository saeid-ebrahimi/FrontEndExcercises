import { Divider } from "@mui/material";
import { ProgressFunctionality } from "./01.ProgressFunctionality";
import { ProgressCustomization } from "./02.ProgressCustomization";
import { ProgressCustomizationUsingClassesObject } from "./03.ProgressCustomizationUsingClassesObject";


export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <ProgressFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <ProgressCustomization />
        <ProgressCustomizationUsingClassesObject />
    </div>
}