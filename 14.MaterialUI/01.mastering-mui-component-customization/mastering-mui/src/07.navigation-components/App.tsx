import { Divider } from "@mui/material";
import SpeedDialFunctionality from "./07.SpeedDial/01.SpeedDialFunctionality";
import SpeedDialCustomization from "./07.SpeedDial/02.SpeedDialCustomization";

export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <SpeedDialFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <SpeedDialCustomization />
    </div>
}
