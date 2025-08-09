import type { ComponentType } from "react";

export type TRegularListProps<T, K extends string> = {
    items: T[];
    sourceName: string;
    ItemComponent: ComponentType<{ [P in K]: T }>
}