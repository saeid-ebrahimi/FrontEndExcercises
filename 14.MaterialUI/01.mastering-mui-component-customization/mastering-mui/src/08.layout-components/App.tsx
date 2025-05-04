import { Divider } from "@mui/material";
import ContainerFunctionality from "./02.Container/01.ContainerFunctionality";
import ContainerCustomization from "./02.Container/02.ContainerCustomization";


export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <ContainerFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <ContainerCustomization />
    </div>
}
