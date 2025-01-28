import { CheckboxFunctionality } from "./04.Checkbox/01.CheckboxFunctionality";
import { CheckboxCustomization } from "./04.Checkbox/02.CheckboxCustomization";

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