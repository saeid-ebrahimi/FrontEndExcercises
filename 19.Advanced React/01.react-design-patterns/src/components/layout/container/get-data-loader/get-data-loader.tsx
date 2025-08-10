import axios from "axios";
import { Children, cloneElement, isValidElement, useEffect, useState, type ReactElement, } from "react";
import type { IGetDataLoaderProps } from ".";

export function GetDataLoader<T>({ children, getUrl }: IGetDataLoaderProps<T>) {
    const [data, setData] = useState<T | null>(null)
    useEffect(() => {
        if (getUrl) {
            (async () => {
                const response = await axios.get(getUrl)
                setData(response.data)
            })()
        }
    }, [getUrl])
    return <>
        {Children.map(children, (child) => {
            if (isValidElement(child)) {
                return cloneElement(child as ReactElement<{ data: T | null }>, { data })
            }
            return child
        })}
    </>
}