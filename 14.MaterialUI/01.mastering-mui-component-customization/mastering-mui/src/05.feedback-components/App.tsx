import { Divider } from "@mui/material";
import { ProgressFunctionality } from "./04.Progress/01.ProgressFunctionality";


export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <ProgressFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>

    </div>
}