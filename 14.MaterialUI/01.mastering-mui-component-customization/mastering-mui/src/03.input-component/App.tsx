
import { TextFieldFunctionality } from "./12.TextField/01.TextFieldFunctionality";
import { TextFieldCustomization } from "./12.TextField/02.TextFieldCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <TextFieldFunctionality />
        <TextFieldCustomization />
    </div>
}