import { Divider } from "@mui/material";
import StepperFunctionality from "./01.StepperFunctionality";
import StepperCustomization from "./02.StepperCustomization";
import StepperCustomizationUsingClassesObject from "./03.StepperCustomizationUsingClassesObject";

export default function App() {
    return <div style={{
        flexDirection: "column",
        // justifyContent: "center",
        margin: 20,
        minHeight: "100vh",
        alignItems: 'normal',
        gap: "1.5rem"
    }}>
        <StepperFunctionality />
        <Divider flexItem variant={"middle"}>Customization</Divider>
        <StepperCustomization />
        <StepperCustomizationUsingClassesObject />
    </div>
}
