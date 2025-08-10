import type { ReactNode } from "react";

export interface IGetDataLoaderProps<T> {
    children: ReactNode;
    getUrl: string;
}
