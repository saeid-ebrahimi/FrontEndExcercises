import { CheckboxFunctionality } from "./01.CheckboxFunctionality";
import { CheckboxCustomization } from "./02.CheckboxCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <CheckboxFunctionality />
        <CheckboxCustomization />
    </div>
}