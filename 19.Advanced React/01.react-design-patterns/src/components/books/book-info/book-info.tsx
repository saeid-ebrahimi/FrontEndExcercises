import type { TBookInfoProps } from ".";

export function BookInfo({ book }: TBookInfoProps) {
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