import { Divider } from "@mui/material";
import PaginationFunctionality from "./01.PaginationFunctionality";
import PaginationCustomization from "./02.PaginationCustomization";
import PaginationCustomizationUsingClassesObject from "./03.PaginationCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <PaginationFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <PaginationCustomization />
        <PaginationCustomizationUsingClassesObject />
    </div>
}
