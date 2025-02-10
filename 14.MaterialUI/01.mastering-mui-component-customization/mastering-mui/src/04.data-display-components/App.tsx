import { BadgeFunctionality } from "./02.Badge/01.BadgeFunctionality";
import { BadgeCustomization } from "./02.Badge/02.BadgeCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <BadgeFunctionality />
        <BadgeCustomization />
    </div>
}