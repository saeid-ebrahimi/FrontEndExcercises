import { IconsFunctionality } from "./01.IconsFunctionality";
import { IconsCustomization } from "./02.IconsCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <IconsFunctionality />
        <IconsCustomization />
    </div>
}