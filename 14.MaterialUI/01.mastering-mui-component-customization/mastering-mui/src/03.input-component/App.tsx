import { SwitchFunctionality } from "./11.SwitchButton/01.SwitchFunctionality";
import { SwitchCustomization } from "./11.SwitchButton/02.SwitchCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SwitchFunctionality />
        <SwitchCustomization />
    </div>
}