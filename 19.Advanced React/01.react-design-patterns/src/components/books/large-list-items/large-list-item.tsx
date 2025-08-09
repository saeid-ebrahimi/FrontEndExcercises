import type { TLargeBookListItemProps } from "."


export function LargeBookListItem({ book }: TLargeBookListItemProps) {
    const { name, pages, title, price } = book
    return (
        <>
            <h2>{name}</h2>
            <p>{price}</p>
            <h3>Title:</h3>
            <p>{title}</p>
            <p>Number of Pages: {pages}</p>
        </>
    )
}