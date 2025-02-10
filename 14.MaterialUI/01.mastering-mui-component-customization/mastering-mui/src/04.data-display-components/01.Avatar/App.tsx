import { AvatarFunctionality } from "./01.AvatarFunctionality";
import { AvatarCustomization } from "./02.AvatarCustomization";
import { AvatarCustomizationUsingClassesObject } from "./03.AvatarCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <AvatarFunctionality />
        <AvatarCustomization />
        <AvatarCustomizationUsingClassesObject />
    </div>
}