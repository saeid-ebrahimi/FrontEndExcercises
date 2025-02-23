import { Divider } from "@mui/material";
import { SnackbarFunctionality } from "./06.Snackbar/01.SnackbarFunctionality";
import { SnackbarCustomization } from "./06.Snackbar/02.SnackbarCustomization";
import { SnackbarCustomizationUsingClassesObject } from "./06.Snackbar/03.SnackbarCustomizationUsingClassesObject";

export default function App() {

    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <SnackbarFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <SnackbarCustomization />
        <SnackbarCustomizationUsingClassesObject />
    </div>
}