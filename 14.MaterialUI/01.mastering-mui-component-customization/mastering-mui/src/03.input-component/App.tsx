import { SliderFunctionality } from "./10.Slider/01.SliderFunctionality";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SliderFunctionality />
    </div>
}