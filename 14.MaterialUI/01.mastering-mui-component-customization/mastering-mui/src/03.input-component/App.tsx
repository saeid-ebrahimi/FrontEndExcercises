import { CheckboxFunctionality } from "./04.Checkbox/01.CheckboxFunctionality";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <CheckboxFunctionality />
    </div>
}