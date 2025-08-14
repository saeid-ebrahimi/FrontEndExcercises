import { useEffect, useState, type ComponentType } from "react";
import { getData, postData } from "../../apis/cmsApis";

function toCapital(str: string) {
    str.charAt(0).toUpperCase() + str.slice(1)
}

export function withUpdateResource<P, T>(Component: ComponentType<P>, url: string) {
    return (props: P) => {
        const [initialResource, setInitialResource] = useState<T | null>();
        const [resource, setResource] = useState<T | null>();
        useEffect(() => {
            (async () => {
                const result = await getData<T>(url);
                setInitialResource(result);
                setResource(result)
            })()
        }, [])

        const onChangeData = (updates: Partial<T>) => {
            setResource((prev) => {
                if (!prev) {
                    return { ...updates } as T;
                }
                return { ...prev, ...updates };
            });
        }

        const onPostData = async () => {
            if (resource) {
                const result = await postData<T>(url, resource)
                setInitialResource(result);
                setResource(result);
            }
        }

        const onResetData = () => {
            setResource(initialResource)
        }
        // if you want to add resourceName to the parameters
        // const capitalizeResourceName = toCapital(resourceName)
        // const resourceProps = {
        //     [resourceName]: resource,
        //     [`onChange${capitalizeResourceName}`]: onChangeData,
        //     [`onPost${capitalizeResourceName}`]: onPostData,
        //     [`onReset${capitalizeResourceName}`]: onResetData
        // }
        // return <Component {...props} {...resourceProps} />
        return <Component {...props} data={resource} onChangeData={onChangeData} onPostData={onPostData} onResetData={onResetData} />

    }
}