import { Divider } from "@mui/material";
import { BreadCrumbsFunctionality } from "./01.BreadCrumbsFunctionality";
import { BreadCrumbsCustomization } from "./02.BreadCrumbsCustomization";
import { BreadCrumbsCustomizationUsingClassesObject } from "./03.BreadCrumbsCustomizationUsingClassesObject";

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
        <BreadCrumbsFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <BreadCrumbsCustomization />
        <BreadCrumbsCustomizationUsingClassesObject />
    </div>
}
