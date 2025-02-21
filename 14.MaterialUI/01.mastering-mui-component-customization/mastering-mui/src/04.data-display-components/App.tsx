import { TypographyFunctionality } from "./10.Typography/01.TypographyFunctionality";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        gap: "1.5rem"
    }}>
        <TypographyFunctionality />
    </div>
}