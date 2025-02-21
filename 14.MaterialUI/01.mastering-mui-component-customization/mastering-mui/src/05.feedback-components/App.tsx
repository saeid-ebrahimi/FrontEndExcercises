import { AlertFunctionality } from "./01.Alert/01.AlertFunctionality";

export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>

        <AlertFunctionality />
    </div>
}