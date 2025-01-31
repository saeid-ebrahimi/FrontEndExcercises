import { SwitchFunctionality } from "./11.SwitchButton/01.SwitchFunctionality";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SwitchFunctionality />
    </div>
}