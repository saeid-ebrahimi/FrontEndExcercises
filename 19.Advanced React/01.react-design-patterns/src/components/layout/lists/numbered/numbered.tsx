import type { TNumberedListProps } from ".";

export function NumberedList<T, K extends string>({ items, sourceName, ItemComponent }: TNumberedListProps<T, K>) {
    return <>
        {items.map((item, index) => <ItemComponent key={index} {...{ [sourceName]: item } as { [P in K]: T }} />)}
    </>
}