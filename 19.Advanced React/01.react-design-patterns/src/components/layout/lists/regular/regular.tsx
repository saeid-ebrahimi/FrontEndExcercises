import type { TRegularListProps } from ".";

export function RegularList<T, K extends string>({ items, sourceName, ItemComponent }: TRegularListProps<T, K>) {
    return <>
        {items.map((item, index) => <ItemComponent key={index} {...{ [sourceName]: item } as { [P in K]: T }} />)}
    </>
}