
import { Children, cloneElement, isValidElement, useEffect, type ReactElement, } from "react";
import type { IGetDataLoaderProps } from ".";
import { useGetData } from "../../../../hooks/container/useGetData";

export function GetDataLoader<T>({ children, getUrl }: IGetDataLoaderProps<T>) {
    const { data, isFetching, isError, isSuccess } = useGetData<T>(getUrl)
    useEffect(() => {
        if (isSuccess) {
            console.log(data);

        }
    }, [isFetching, isError, isSuccess])
    return <>
        {Children.map(children, (child) => {
            if (isValidElement(child)) {
                return cloneElement(child as ReactElement<{ data: T | null }>, { data })
            }
            return child
        })}
    </>
}