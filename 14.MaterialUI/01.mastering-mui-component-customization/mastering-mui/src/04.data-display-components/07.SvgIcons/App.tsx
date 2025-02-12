import { SVGIconsFunctionality } from "./01.SVGIconsFunctionality";
import { SvgIconsCustomization } from "./02.SvgIconsCustomization";


export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <SVGIconsFunctionality />
        <SvgIconsCustomization />
    </div>
}