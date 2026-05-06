export type TBook = {
    name: string;
    pages: number;
    title: string;
    price: number;
};

export function BookInfo({ book }: { book: TBook }) {
    const { name, pages, title, price } = book
    return (

        <>
            {book ? <>
                <h2>{name}</h2>
                <p>{price}</p>
                <h3>Title:</h3>
                <p>{title}</p>
                <p>Number of Pages: {pages}</p>
            </> : <h2>Loading</h2>}

        </>
    )

}