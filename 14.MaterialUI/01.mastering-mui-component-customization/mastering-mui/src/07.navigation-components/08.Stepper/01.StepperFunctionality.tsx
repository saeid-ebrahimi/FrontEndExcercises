import { useState } from "react"
import { Stepper, Step, StepLabel, StepContent, StepButton, Button, MobileStepper } from "@mui/material";

const steps = ["Enter your name", "Enter your email", "Enter a password"]
const descriptions = ["Enter your name here", "Enter a valid email as your email address", "Enter a strong password as your password"]

export default function StepperFunctionality() {
    const [activeStep, setActiveStep] = useState(0)
    const [completed, setCompleted] = useState<{ [k: number]: boolean; }>()

    const handleNext = () => setActiveStep(prev => prev + 1)
    const handlePrevious = () => setActiveStep(prev => prev - 1)
    const handleCompleted = () => setCompleted(prev => ({ ...prev, [activeStep]: true }))
    const handleClick = (index: number) => setActiveStep(index)

    const backButton = <Button disabled={activeStep === 0} onClick={handlePrevious} variant={"contained"} sx={{ mr: "3rem" }}>Back</Button>
    const nextButton = <Button disabled={activeStep === steps.length} onClick={handleNext} variant={"contained"} >
        {activeStep >= (steps.length - 1) ? "Complete" : "Forward"}
    </Button>
    return (
        <div>
            {/* <Stepper activeStep={activeStep} sx={{ mb: "5rem" }}>
                {steps.map((label, index) => <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>)
                }
            </Stepper>
            <div style={{ width: "max-content", margin: "2rem auto" }}>
                <Button disabled={activeStep === 0} onClick={handlePrevious} variant={"contained"} sx={{ mr: "3rem" }}>Back</Button>
                <Button disabled={activeStep === steps.length} onClick={handleNext} variant={"contained"} >
                     {activeStep >= (steps.length - 1) ? "Complete" : "Forward" }
                </Button>
            </div> */}
            <br />
            <Stepper
                orientation={"vertical"}
                // alternativeLabel
                nonLinear={true}
                activeStep={activeStep}
                sx={{ mb: "5rem" }}>
                {steps.map((label, index) => <Step completed={completed && completed[index]} key={label}>
                    <StepButton
                        optional={index === 0 ? "optional" : false}
                        onClick={() => { handleClick(index) }} >
                        <StepLabel optional={index === 0 ? "optional" : false} error={index === steps.length - 1}>
                            {label}
                        </StepLabel>
                    </StepButton>
                    <StepContent TransitionProps={{ unmountOnExit: false }}>{descriptions[index]}</StepContent>
                </Step>)
                }
            </Stepper>
            <div style={{ width: "max-content", margin: "2rem auto" }}>
                {backButton}
                {nextButton}
                <Button variant={"outlined"} disabled={(completed && completed[activeStep] === true) || activeStep === steps.length} onClick={handleCompleted} sx={{ ml: "3rem" }}>Mark as Completed</Button>
            </div>
            <br />
            <MobileStepper
                variant={"dots"}
                backButton={backButton}
                nextButton={nextButton}
                steps={steps.length}
                position={"static"}
                activeStep={activeStep} />
        </div >
    )
}
