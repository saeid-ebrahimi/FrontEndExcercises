import { SliderFunctionality } from "./10.Slider/01.SliderFunctionality";
import { SliderCustomization } from "./10.Slider/02.SliderCustomization";
import { SliderCustomizationUsingClassesObject } from "./10.Slider/03.SliderCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        {/* <SliderFunctionality />
        <SliderCustomization /> */}
        <SliderCustomizationUsingClassesObject />
    </div>
}