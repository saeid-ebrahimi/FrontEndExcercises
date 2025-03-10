import { Divider } from "@mui/material";
import { CardFunctionality } from "./01.CardFunctionality";
import { CardCustomization } from "./02.CardCustomization";
import { CardCustomizationUsingClassesObject } from "./03.CardCustomizationUsingClassesObject";


export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <CardFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <CardCustomization />
        <CardCustomizationUsingClassesObject />
    </div>
}
