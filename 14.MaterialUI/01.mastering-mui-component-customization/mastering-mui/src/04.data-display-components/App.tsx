import { DividerFunctionality } from "./04.Divider/01.DividerFunctionality";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <DividerFunctionality />
    </div>
}