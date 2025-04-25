import { Divider } from "@mui/material";
import DrawerFunctionality from "./01.DrawerFunctionality";
import DrawerCustomization from "./02.DrawerCustomization";
import DrawerCustomizationUsingClassesObject from "./03.DrawerCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <DrawerFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <DrawerCustomization />
        <DrawerCustomizationUsingClassesObject />
    </div>
}
