import { ToggleButtonFunctionality } from "./01.ToggleButtonFunctionality";
import { ToggleButtonCustomization } from "./02.ToggleButtonCustomization";
import { ToggleButtonCustomizationUsingClassesObject } from "./03.ToggleButtonCustomizationUsingClassesObject";

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
        <ToggleButtonCustomizationUsingClassesObject />
    </div>
}