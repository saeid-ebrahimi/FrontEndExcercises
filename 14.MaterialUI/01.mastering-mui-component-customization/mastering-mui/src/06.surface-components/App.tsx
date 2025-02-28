import { Divider } from "@mui/material";
import { PaperFunctionality } from "./04.Paper/01.PaperFunctionality";
import { PaperCustomization } from "./04.Paper/02.PaperCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <PaperFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <PaperCustomization />
    </div>
}
