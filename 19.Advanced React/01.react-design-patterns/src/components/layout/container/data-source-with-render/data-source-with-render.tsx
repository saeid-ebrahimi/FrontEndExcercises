import { useEffect, useState } from "react";
import type { IDataSourceWithRenderProps } from ".";

export function DataSourceWithRender<T>({ getData, render }: IDataSourceWithRenderProps<T>) {
    const [resource, setResource] = useState<T | null>(null)
    useEffect(() => {
        (async () => {
            const data = await getData();
            setResource(data)
        })()
    }, [getData])
    if (resource)
        return render(resource)
    else
        return <></>
}