import { ReactNode } from "react";

export type TFinalData = {
    name: string;
    age: number;
    country: string;
    state: string;
}

export function ControlledFlow(
    { render, onNext, currentStep }:
        {
            render: (props: { onNext: (data: Partial<TFinalData>) => void; step: number }) => ReactNode;
            onDone: (data: Partial<TFinalData>) => void; lastStepNumber: number;
            onNext: (data: Partial<TFinalData>) => void; currentStep: number
        }
) {
    const goNext = (dataFromStep: Partial<TFinalData>) => {
        onNext(dataFromStep)
    }
    return <>{render({ onNext: goNext, step: currentStep })}</>
}