import { ReactNode, useEffect, useState } from "react";

export function DataSourceWithRender<T>(
    { getFn, render }: { getFn?: () => T | Promise<T>; render: (prop: T) => ReactNode; }
) {
    const [resource, setResource] = useState<T>()
    useEffect(() => {
        (async () => {
            let data;
            if (getFn) {
                data = await getFn();
                console.log(data);

            }
            setResource(data)
        })();
    }, [getFn])

    if (!resource) return <div>Loading...</div>;
    return <>{render(resource)}</>;
}