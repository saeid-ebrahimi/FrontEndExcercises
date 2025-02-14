import { TableFunctionality } from "./08.Table/01.TableFunctionality";
import { TableCustomization } from "./08.Table/02.TableCustomization";
import { TableCustomizationUsingClassesObject } from "./08.Table/03.TableCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        gap: "2rem"
    }}>
        <TableFunctionality />
        <TableCustomization />
        <TableCustomizationUsingClassesObject />
    </div>
}