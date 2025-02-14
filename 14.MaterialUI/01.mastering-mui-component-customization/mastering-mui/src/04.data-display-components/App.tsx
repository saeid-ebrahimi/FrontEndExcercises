import { ListFunctionality } from "./05.List/01.ListFunctionality";
import { ListCustomization } from "./05.List/02.ListCustommization";
import { ListCustomizationUsingClassesObject } from "./05.List/03.ListCustomizationUsingClassesObject";

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