import { TooltipFunctionality } from "./01.TooltipFunctionality";
import { TooltipCustomization } from "./02.TooltipCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        gap: "2rem",
    }}>
        <TooltipFunctionality />
        <TooltipCustomization />
    </div>
}