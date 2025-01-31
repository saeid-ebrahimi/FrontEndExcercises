import { SelectFunctionality } from "./01.SelectFunctionality";
import { SelectCustomization } from "./02.SelectCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SelectFunctionality />
        <SelectCustomization />
    </div>
}