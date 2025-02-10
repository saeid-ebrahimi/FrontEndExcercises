import { BadgeFunctionality } from "./02.Badge/01.BadgeFunctionality";
import { BadgeCustomization } from "./02.Badge/02.BadgeCustomization";
import { BadgeCustomizationUsingClassesObject } from "./02.Badge/03.BadgeCustomizationUsingClassesObject";

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
        <BadgeCustomizationUsingClassesObject />
    </div>
}