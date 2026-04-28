import { Divider } from "@mui/material";
import GridCustomization from "./03.GridCustomization";
// import GridFunctionality from "./01.GridFunctionality";
// import GridDemo from "./02.GridDemo";


export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        {/* <GridFunctionality /> */}
        {/* <GridDemo /> */}
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <GridCustomization />

    </div>
}
