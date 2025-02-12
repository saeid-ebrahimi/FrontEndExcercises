import { DividerFunctionality } from "./01.DividerFunctionality";
import { DividerCustomization } from "./02.DividerCustomization";
import { DividerCustomizationUsingClassesObject } from "./03.DividerCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <DividerFunctionality />
        <DividerCustomization />
        <DividerCustomizationUsingClassesObject />
    </div>
}