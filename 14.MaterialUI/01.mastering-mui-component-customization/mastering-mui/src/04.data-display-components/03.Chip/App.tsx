import { ChipFunctionality } from "./01.ChipFunctionality";
import { ChipCustomization } from "./02.ChipCustomization";
import { ChipCustomizationUsingClassesObject } from "./03.ChipCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <ChipFunctionality />
        <ChipCustomization />
        <ChipCustomizationUsingClassesObject />
    </div>
}