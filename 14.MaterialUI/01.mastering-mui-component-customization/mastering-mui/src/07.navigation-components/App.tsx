import { Divider } from "@mui/material";
import StepperFunctionality from "./08.Stepper/01.StepperFunctionality";
import StepperCustomization from "./08.Stepper/02.StepperCustomization";
import StepperCustomizationUsingClassesObject from "./08.Stepper/03.StepperCustomizationUsingClassesObject";

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
