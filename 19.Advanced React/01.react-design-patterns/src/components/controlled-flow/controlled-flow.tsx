import { Children, cloneElement, isValidElement, type ReactElement } from "react";
import type { IControlledFlowProps } from "./controlled-flow.types";
import type { TData } from "../uncontrolled-flow";

export function ControlledFlow({ children, onDone, onNext, currentIndex }: IControlledFlowProps) {
    const childrenArray = Children.toArray(children)
    const currentChild = childrenArray[currentIndex]
    const goNext = (dataFromStep: Partial<TData>) => {
        if (currentIndex >= Children.toArray(children).length - 1)
            onDone(dataFromStep)
        else onNext(dataFromStep)
    }
    if (isValidElement(currentChild)) {
        return cloneElement(currentChild as ReactElement<{ goNext: (data: TData) => void }>,
            { goNext })
    }
    return currentChild
}