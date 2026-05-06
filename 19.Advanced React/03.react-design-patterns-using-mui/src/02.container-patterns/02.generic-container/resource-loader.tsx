import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

export function ResourceLoader<T>(
    { resourceUrl, children }:
        { resourceUrl: string; children: (resource: T) => ReactNode }
) {
    const [resource, setResource] = useState<T>()
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/${resourceUrl}`);
            setResource(response.data)
        })()
    }, [resourceUrl])

    if (!resource) return <div>Loading...</div>;
    return <>{children(resource)}</>;
}