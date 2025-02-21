import { Divider } from "@mui/material";
import { AlertFunctionality } from "./01.Alert/01.AlertFunctionality";
import { AlertCustomization } from "./01.Alert/02.AlertCustomization";

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
    </div>
}