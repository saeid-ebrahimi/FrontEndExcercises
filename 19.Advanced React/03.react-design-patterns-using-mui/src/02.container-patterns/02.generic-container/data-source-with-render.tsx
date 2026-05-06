import { ReactNode, useEffect, useState } from "react";

export function DataSource<T>(
    { getFn, render }: { getFn?: () => T | Promise<T>; render: (prop: T) => ReactNode; }
) {
    const [resource, setResource] = useState<T>()
    useEffect(() => {
        (async () => {
            let data;
            if (getFn) {
                data = await getFn();
            }
            setResource(data)
        })();
    }, [getFn])

    if (!resource) return <div>Loading...</div>;
    return <>{render(resource)}</>;
}