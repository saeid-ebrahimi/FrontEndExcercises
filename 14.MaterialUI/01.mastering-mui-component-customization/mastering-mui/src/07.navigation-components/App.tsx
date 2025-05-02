import { Divider } from "@mui/material";
import TabsFunctionality from "./09.Tabs/01.TabsFunctionality";


export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <TabsFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>

    </div>
}
