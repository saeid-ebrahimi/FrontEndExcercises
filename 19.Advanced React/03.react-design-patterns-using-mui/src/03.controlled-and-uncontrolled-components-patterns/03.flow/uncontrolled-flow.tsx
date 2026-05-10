import { ReactNode } from "react";
import { useState } from "react"

export type TFinalData = {
    name: string;
    age: number;
    country: string;
    state: string;
}

export function UncontrolledFlow(
    { render, onDone, lastStepNumber }:
        { render: (props: { onNext: (data: Partial<TFinalData>) => void; step: number }) => ReactNode; onDone: (data: Partial<TFinalData>) => void; lastStepNumber: number }
) {
    const [data, setData] = useState<TFinalData>({
        name: "",
        age: 0,
        country: "",
        state: "",
    });
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const onNext = (dataFromStep: Partial<TFinalData>) => {
        const newData = {
            ...data,
            ...dataFromStep
        }
        setData(newData)
        if (currentStepIndex === lastStepNumber - 1) {
            console.log(data);
            onDone(newData)
        }
        setCurrentStepIndex(prev => prev + 1)
    }
    return <>{render({ onNext, step: currentStepIndex })}</>
}