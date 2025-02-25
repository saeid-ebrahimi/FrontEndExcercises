// import { Divider } from "@mui/material";
// import { AppBarFunctionality } from "./01.AppBarFunctionality";
import { AppBarCustomization } from "./02.AppBarCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        {/* <AppBarFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider> */}
        <AppBarCustomization />
    </div>
}
