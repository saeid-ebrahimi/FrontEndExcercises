import { Divider } from "@mui/material";
import StackFunctionality from "./01.StackFunctionality";
import StackCustomization from "./02.StackCustomization";


export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <StackFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <StackCustomization />
    </div>
}
