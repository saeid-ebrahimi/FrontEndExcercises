import { Children, cloneElement, isValidElement, useState } from "react"
import type { IUncontrolledFlow, TData } from "."

export function UncontrolledFlow({ children, onDone }: IUncontrolledFlow) {
    const [data, setData] = useState<TData>({
        name: "",
        age: 0,
        country: ""
    })
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const currentChild = Children.toArray(children)[currentStepIndex]

    const goNext = (dataFromStep: Partial<TData>) => {
        const nextStepIndex = currentStepIndex + 1
        const updatedData = {
            ...data,
            ...dataFromStep
        }
        console.log(updatedData);

        if (children)
            if (nextStepIndex < Children.toArray(children).length) {
                setCurrentStepIndex(nextStepIndex)
            } else {
                onDone(updatedData)
            }
        setData(updatedData)
    }

    if (isValidElement(currentChild)) {
        return cloneElement(currentChild as React.ReactElement<{ goNext: (data: Partial<TData>) => void }>, { goNext })
    }

    return currentChild
}