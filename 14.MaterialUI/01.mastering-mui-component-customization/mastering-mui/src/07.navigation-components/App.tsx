import { Divider } from "@mui/material";
import MenuFunctionality from "./05.Menu/01.MenuFunctionality";
import MenuCustomization from "./05.Menu/02.MenuCustomization";

export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <MenuFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <MenuCustomization />
    </div>
}
