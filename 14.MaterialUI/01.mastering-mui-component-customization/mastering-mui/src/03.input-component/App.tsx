import { ButtonGroupFunctionality } from "./03.ButtonGroup/01.ButtonGroupFunctionality";
import { ButtonGroupCustomization } from "./03.ButtonGroup/02.ButtonGroupCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    }}>
        <ButtonGroupFunctionality />
        <ButtonGroupCustomization />
    </div>
}