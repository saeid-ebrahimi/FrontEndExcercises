import { CheckboxCustomization } from "./04.Checkbox/02.CheckboxCustomization"
import { FloatingActionButtonFunctionality } from "./05.FloatingActionButton/01.FloatingActionButtonFunctionality"
import { FloatingActionButtonCustomization } from "./05.FloatingActionButton/02.FloatingActionButtonCustomization"

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <CheckboxCustomization />
        <FloatingActionButtonFunctionality />
        <FloatingActionButtonCustomization />
    </div>
}