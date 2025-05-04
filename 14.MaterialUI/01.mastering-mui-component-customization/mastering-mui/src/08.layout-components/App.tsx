import { Divider } from "@mui/material";
import BoxFunctionality from "./01.Box/01.BoxFunctionality";



export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <BoxFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>

    </div>
}
