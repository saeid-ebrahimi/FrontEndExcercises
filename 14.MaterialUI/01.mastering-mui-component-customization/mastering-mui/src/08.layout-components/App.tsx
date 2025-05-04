import { Divider } from "@mui/material";
import ImageListFunctionality from "./04.ImageList/01.ImageListFunctionality";


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

    </div>
}
