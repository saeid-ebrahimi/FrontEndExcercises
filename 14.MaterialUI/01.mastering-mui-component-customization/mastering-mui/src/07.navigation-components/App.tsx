import { Divider } from "@mui/material";
import StepperFunctionality from "./08.Stepper/01.StepperFunctionality";

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

    </div>
}
