import { Divider } from "@mui/material";
import ImageListFunctionality from "./01.ImageListFunctionality";
import ImageListCustomization from "./02.ImageListCustomization";
import ImageListCustomizationUsingClassesObject from "./03.ImageListCustomizationUsingClassesObject";


export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <ImageListFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <ImageListCustomization />
        <ImageListCustomizationUsingClassesObject />
    </div>
}
