import { Divider, Skeleton } from "@mui/material";
import { SkeletonFunctionality } from "./05.Skeleton/01.SkeletonFunctionality";

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
    </div>
}