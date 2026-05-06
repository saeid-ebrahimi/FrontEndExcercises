import { ReactNode, useEffect, useState } from "react";

export function DataSource<T>(
    { getFn, children }:
        { getFn?: () => T | Promise<T>; children: (resource: T) => ReactNode; }
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
    return <>{children(resource)}</>;
}