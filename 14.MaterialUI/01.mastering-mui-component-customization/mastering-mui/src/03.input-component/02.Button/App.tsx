import { ButtonFunctionalityDemo } from "./01.ButtonFunctionalityDemo";
import { ButtonCustomizationDemo } from "./02.ButtonCustomizationDemo";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    }}>
        <ButtonFunctionalityDemo />
        <ButtonCustomizationDemo />
    </div>
}