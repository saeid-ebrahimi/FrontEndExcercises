import { ChipFunctionality } from "./03.Chip/01.ChipFunctionality";

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
    </div>
}