import { Divider } from "@mui/material";
import { BackdropFunctionality } from "./02.Backdrop/01.BackdropFunctionality";

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
        <Divider flexItem variant={"middle"}>Customization</Divider>
    </div>
}