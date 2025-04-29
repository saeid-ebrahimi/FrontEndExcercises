import { Divider } from "@mui/material";
import PaginationFunctionality from "./06.Pagination/01.PaginationFunctionality";
import PaginationCustomization from "./06.Pagination/02.PaginationCustomization";

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
    </div>
}
