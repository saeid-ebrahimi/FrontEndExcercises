import { FloatingActionButtonFunctionality } from "./01.FloatingActionButtonFunctionality"
import { FloatingActionButtonCustomization } from "./02.FloatingActionButtonCustomization"

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <FloatingActionButtonFunctionality />
        <FloatingActionButtonCustomization />
    </div>
}
