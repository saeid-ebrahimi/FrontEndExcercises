import { Children, cloneElement, isValidElement, useEffect, useState, type ReactElement } from "react";
import type { IDataSourceProps } from ".";

export function DataSource<T>({ children, getData }: IDataSourceProps<T>) {
    const [resources, setResources] = useState<T | null>(null)
    useEffect(() => {
        (async () => {
            const data = await getData();
            setResources(data)
        })()
    }, [getData])
    return <>
        {Children.map(children, (child) => {
            if (isValidElement(child)) {
                return cloneElement(child as ReactElement<{ data: T | null }>, { data: resources })
            }
            return child
        })}
    </>
}