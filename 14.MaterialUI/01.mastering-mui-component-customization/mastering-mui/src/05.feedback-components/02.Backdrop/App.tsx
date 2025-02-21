
import { BackdropFunctionality } from "./01.BackdropFunctionality";

export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <BackdropFunctionality />
    </div>
}