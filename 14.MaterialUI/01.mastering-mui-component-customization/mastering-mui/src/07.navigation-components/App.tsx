import { Divider } from "@mui/material";
import PaginationFunctionality from "./06.Pagination/01.PaginationFunctionality";

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

    </div>
}
