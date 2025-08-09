import type { TSmallBookListItemProps } from "."


export const SmallBookListItem = ({ book }: TSmallBookListItemProps) => {
    const { name, price } = book
    return (
        <p>Name: {name}, Price: {price}</p>
    )
}