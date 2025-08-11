import type { ReactNode } from "react";

export interface IDataSourceProps<T> {
    children: ReactNode;
    getData: () => (Promise<T>);
    resourceName: string;
}