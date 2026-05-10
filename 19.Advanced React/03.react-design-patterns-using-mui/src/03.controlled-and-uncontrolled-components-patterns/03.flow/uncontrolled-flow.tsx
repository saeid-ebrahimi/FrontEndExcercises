import { ReactNode } from "react";
import { useState } from "react"

export function UncontrolledFlow(
    { render, onDone, lastStepNumber }:
        { render: (props: { onNext: () => void; step: number }) => ReactNode; onDone: () => void; lastStepNumber: number }
) {
    const [data, setData] = useState({});
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const onNext = () => {
        if (currentStepIndex === lastStepNumber - 1) {
            onDone()
        }
        setCurrentStepIndex(prev => prev + 1)
    }
    return <>{render({ onNext, step: currentStepIndex })}</>
}