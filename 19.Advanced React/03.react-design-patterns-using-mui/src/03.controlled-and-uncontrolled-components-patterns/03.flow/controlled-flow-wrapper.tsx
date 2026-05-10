import { useState } from "react";
import { ControlledFlow, TFinalData } from "./controlled-flow";
import { generateStep } from "./generateSteps";

export function ControlledFlowWrapper() {
    const lastStep = 5;
    const [data, setData] = useState<TFinalData>({
        name: "",
        age: 0,
        country: "",
        state: "",
    });
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const onDone = (data: Partial<TFinalData>) => {
        alert('All steps completed!')
        console.log(data);

    };
    const goNext = (dataFromStep: Partial<TFinalData>) => {
        const newData = {
            ...data,
            ...dataFromStep
        }
        setData(newData)
        if (currentStepIndex === lastStep - 1) {
            console.log(data);
            onDone(newData)
        }
        setCurrentStepIndex(prev => prev + 1)
    }
    return <ControlledFlow currentStep={currentStepIndex}
        lastStepNumber={lastStep}
        onNext={goNext}
        onDone={() => alert('All steps completed!')}
        render={({ step, onNext }) => {
            const steps = [...Array(lastStep)].map((_, index) => generateStep(index + 1, onNext));
            return steps[step];
        }
        }
    />
}