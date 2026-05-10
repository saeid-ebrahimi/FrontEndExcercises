import { Box, Button, Typography } from "@mui/material";
import { TFinalData } from "./uncontrolled-flow";
const fields = [
    { name: "myName" },
    { age: 12 },
    { country: "USA" },
    { state: "Virginia" },
]
const Step = ({ stepNumber, onNext, }: { stepNumber: number; onNext: (data: Partial<TFinalData>) => void }) => (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3
    }}>
        <Typography variant={"h4"} component="h1">Step {stepNumber}</Typography>
        {fields?.[stepNumber - 1] && <Typography variant={"subtitle1"}>enter {Object.keys(fields?.[stepNumber - 1])?.[0]} field:</Typography>}
        <Button variant={"outlined"} onClick={() => { onNext(fields?.[stepNumber - 1]) }}>Next</Button>
    </Box>
);

export const generateStep = (stepNumber: number, onNext: (data: Partial<TFinalData>) => void) => <Step key={stepNumber} stepNumber={stepNumber} onNext={onNext} />;