
import { TextFieldFunctionality } from "./01.TextFieldFunctionality";
import { TextFieldCustomization } from "./02.TextFieldCustomization";
import TextFieldCustomizationUsingClassesObject from "./03.TextFieldCustomizationUsingClassesObject";

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
        <TextFieldCustomizationUsingClassesObject />
    </div>
}