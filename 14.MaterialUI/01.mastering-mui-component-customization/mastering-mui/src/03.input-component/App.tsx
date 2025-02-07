import { ToggleButtonFunctionality } from "./13.ToggleButton/01.ToggleButtonFunctionality";
import { ToggleButtonCustomization } from "./13.ToggleButton/02.ToggleButtonCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <ToggleButtonFunctionality />
        <ToggleButtonCustomization />
    </div>
}