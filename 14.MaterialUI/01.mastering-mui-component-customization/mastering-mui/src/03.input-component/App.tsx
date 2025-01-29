import { RadioButtonFunctionality } from "./07.RadioButton/01.RadioButtonFunctionality";
import { RadioButtonCustomization } from "./07.RadioButton/02.RadioButtonCustomization";
import { RadioButtonCustomizationUsingClassesObject } from "./07.RadioButton/03.RadioButtonCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <RadioButtonFunctionality />
        <RadioButtonCustomization />
        <RadioButtonCustomizationUsingClassesObject />
    </div>
}