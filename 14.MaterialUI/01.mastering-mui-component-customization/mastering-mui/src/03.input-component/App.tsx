import { FormComponentFunctionality } from "./06.FormComponent/01.FormComponentFunctionality";
import { FormComponentsCustomization } from "./06.FormComponent/02.FormComponentsCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem"
    }}>
        <FormComponentFunctionality />
        <FormComponentsCustomization />
    </div>
}