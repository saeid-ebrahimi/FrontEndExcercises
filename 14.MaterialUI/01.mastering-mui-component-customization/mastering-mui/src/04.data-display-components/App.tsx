import { TableFunctionality } from "./08.Table/01.TableFunctionality";
import { TableCustomization } from "./08.Table/02.TableCustomization";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <TableFunctionality />
        <hr />
        <TableCustomization />
    </div>
}