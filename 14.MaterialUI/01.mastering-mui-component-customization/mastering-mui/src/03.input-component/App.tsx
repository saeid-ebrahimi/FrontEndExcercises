import { ToggleButtonFunctionality } from "./13.ToggleButton/ToggleButtonFunctionality";

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
    </div>
}