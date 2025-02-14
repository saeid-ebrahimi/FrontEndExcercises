import { ListFunctionality } from "./01.ListFunctionality";
import { ListCustomization } from "./02.ListCustomization";
import { ListCustomizationUsingClassesObject } from "./03.ListCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <ListFunctionality />
        <ListCustomization />
        <ListCustomizationUsingClassesObject />
    </div>
}