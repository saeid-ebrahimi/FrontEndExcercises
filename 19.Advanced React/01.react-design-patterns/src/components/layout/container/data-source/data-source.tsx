import { Children, cloneElement, isValidElement, useEffect, useState, type ReactElement } from "react";
import type { IDataSourceProps } from ".";

export function DataSource<T>({ children, getData, resourceName }: IDataSourceProps<T>) {
    const [resources, setResources] = useState<T | null>(null)
    useEffect(() => {

        (async () => {
            const data = await getData();
            if (data)
                setResources(data)
        })()
    }, [getData])
    return <>
        {Children.map(children, (child) => {
            if (isValidElement(child)) {
                return cloneElement(child as ReactElement<{ resources: T | null }>, { [resourceName]: resources })
            }
            return child
        })}
    </>
}