import { Divider } from "@mui/material";
import { SkeletonFunctionality } from "./01.SkeletonFunctionality";
import { SkeletonCustomization } from "./02.SkeletonCustomization";

export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <SkeletonFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <SkeletonCustomization />
    </div>
}