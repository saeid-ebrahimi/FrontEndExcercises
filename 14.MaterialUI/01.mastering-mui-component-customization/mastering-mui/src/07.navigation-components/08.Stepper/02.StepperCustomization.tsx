import { useState } from "react"
import { Stepper, Step, StepLabel, StepContent, StepButton, Button, Typography, StepConnector, MobileStepper } from "@mui/material";
import { Assignment, AssignmentInd, AssignmentTurnedIn } from "@mui/icons-material";

const steps = ["Enter your name", "Enter your email", "Enter a password"]
const descriptions = ["Enter your name here", "Enter a valid email as your email address", "Enter a strong password as your password"]
const icons = [<Assignment />, <AssignmentInd />, <AssignmentTurnedIn />]

export default function StepperCustomization() {
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
    const connectorHeightStyle = {
        height: "5rem"
    }
    const connectorStyles = {
        borderColor: "#1d293d",
        borderWidth: 5,
    }
    const CustomConnector = <StepConnector sx={{ "& > .MuiStepConnector-line": { ...connectorStyles, ...connectorHeightStyle } }} />
    return (
        <div>
            <Stepper
                connector={CustomConnector}
                orientation={"vertical"}
                // alternativeLabel
                nonLinear={true}
                activeStep={activeStep}
                sx={{ mb: "5rem" }}>
                {steps.map((label, index) =>
                    <Step completed={completed && completed[index]} sx={{
                        "&.Mui-completed > * > * > * > svg": {
                            fill: "#497d00"
                        }
                    }} key={label}>
                        <StepButton
                            icon={completed && completed[index] && icons[index]}
                            sx={{
                                "& * > * > svg": {
                                    fill: "#1d293d",
                                    fontSize: "2.5rem",
                                    text: {
                                        fill: "#cad5e2",
                                        fontFamily: "Verdana",
                                        fontWeight: "bold",
                                    }
                                }
                            }}
                            optional={index === 0 ? <Typography variant={"caption"} sx={{
                                fontFamily: "Verdana"
                            }}>Optional</Typography> : false}
                            onClick={() => { handleClick(index) }} >
                            <StepLabel sx={{
                                // "& * > svg": {
                                //     fill: "lightblue",
                                //     fontSize: "2.5rem",
                                //     text: {
                                //         fill: "#cad5e2",
                                //         fontFamily: "Verdana",
                                //         fontWeight: "bold",
                                //     }
                                // }
                                fontFamily: "Verdana",
                                fontWeight: "bold",
                            }} optional={index === 0 ? "optional" : false} error={index === steps.length - 1}>
                                {label}
                            </StepLabel>
                        </StepButton>
                        <StepContent sx={{ ...connectorStyles }} TransitionProps={{ unmountOnExit: false }}>{descriptions[index]}</StepContent>
                    </Step>)
                }
            </Stepper>
            <div style={{ width: "max-content", margin: "2rem auto" }}>
                {backButton}
                {nextButton}
                <Button variant={"outlined"} disabled={(completed && completed[activeStep] === true) || activeStep === steps.length} onClick={handleCompleted} sx={{ ml: "3rem" }}>Mark as Completed</Button>
            </div>
            <MobileStepper
                variant={"dots"}
                // variant={"text"}
                // variant={"progress"}
                backButton={backButton}
                nextButton={nextButton}
                steps={steps.length}
                position={"static"}
                sx={{
                    // text variant styles
                    color: "#3c6300",
                    fontFamily: "Verdana",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    // dots variant styles
                    "& > * > .MuiMobileStepper-dot": {
                        width: "1rem",
                        height: "1rem",
                        margin: "0.3rem",
                        "&.MuiMobileStepper-dotActive": {
                            bgcolor: "#3c6300"
                        },
                        "&:not(.MuiMobileStepper-dotActive)": {
                            bgcolor: "#bbf451",
                        },

                    }
                }}
                // LinearProgressProps={{
                //     sx: {
                //         bgcolor: "#7ccf00"
                //     }
                // }}
                activeStep={activeStep} />
        </div >
    )
}
