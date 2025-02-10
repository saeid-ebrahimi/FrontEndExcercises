import { ChipFunctionality } from "./03.Chip/01.ChipFunctionality";
import { ChipCustomization } from "./03.Chip/02.ChipCustomization";

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
    </div>
}