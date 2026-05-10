import { Button, Typography } from "@mui/material"
import { ControlledForm } from "../03.controlled-and-uncontrolled-components-patterns/01.forms/controlled-form"
import { UnControlledForm } from "../03.controlled-and-uncontrolled-components-patterns/01.forms/uncontrolled-form"
import { UnControlledDialog } from "../03.controlled-and-uncontrolled-components-patterns/02.dialog/uncontrlled-dialog"
import { UncontrolledFlow } from "../03.controlled-and-uncontrolled-components-patterns/03.flow/uncontrolled-flow"
import "../App.css"
import { generateStep } from "../03.controlled-and-uncontrolled-components-patterns/03.flow/generateSteps"

export default function App() {
    return <>
        {/* <UnControlledForm />
        <ControlledForm />
        <UnControlledDialog /> */}
        <UncontrolledFlow
            onDone={() => alert('All steps completed!')}
            lastStepNumber={5}
            render={({ step, onNext }) => {
                const steps = [...Array(5)].map((_, index) => generateStep(index + 1, onNext));
                return steps[step];

            }
            }
        />


    </>
}