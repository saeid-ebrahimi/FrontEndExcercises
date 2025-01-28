import { ButtonGroupFunctionality } from "./01.ButtonGroupFunctionality";
import { ButtonGroupCustomization } from "./02.ButtonGroupCustomization";

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