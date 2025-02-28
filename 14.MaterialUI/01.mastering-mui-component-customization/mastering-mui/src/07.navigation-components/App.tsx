import { Divider } from "@mui/material";
import { ButtonNavigationFunctionality } from "./01.BottomNavigation/01.ButtonNavigationFunctionality";
import { BottomNavigationCustomization } from "./01.BottomNavigation/02.BottomNavigationCustomization";
import { BottomNavigationCustomizationUsingClassesObject } from "./01.BottomNavigation/03.BottomNavigationCustomizationUsingClassesObject";


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
        <ButtonNavigationFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <BottomNavigationCustomization />
        <BottomNavigationCustomizationUsingClassesObject />
    </div>
}
