import { Box, Button, Typography } from "@mui/material";

const Step = ({ stepNumber, onNext, }: { stepNumber: number; onNext?: () => void }) => (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3
    }}>
        <Typography variant={"h4"} component="h1">Step {stepNumber}</Typography>
        <Button variant={"outlined"} onClick={onNext}>Next</Button>
    </Box>
);

export const generateStep = (stepNumber: number, onNext?: () => void) => <Step key={stepNumber} stepNumber={stepNumber} onNext={onNext} />;