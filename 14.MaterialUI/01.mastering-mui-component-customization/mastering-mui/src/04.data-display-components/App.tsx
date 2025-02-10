import { AvatarFunctionality } from "./01.Avatar/01.AvatarFunctionality";

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
    </div>
}