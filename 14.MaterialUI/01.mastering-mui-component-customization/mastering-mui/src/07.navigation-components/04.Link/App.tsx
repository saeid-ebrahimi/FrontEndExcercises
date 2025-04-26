import { Divider } from "@mui/material";
import LinkFunctionality from "./01.LinkFunctionality";
import LinkCustomization from "./02.LinkCustomization";

export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <LinkFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <LinkCustomization />
    </div>
}
