import { Typography } from "@mui/material";

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
                <Typography component={"h2"}>{name}</Typography>
                <Typography component={"p"}>{price}</Typography>
                <Typography component={"h3"}>Title:</Typography>
                <Typography component={"p"}>{title}</Typography>
                <Typography component={"p"}>Number of Pages: {pages}</Typography>
            </> : <Typography component={"h2"}>Loading</Typography>}

        </>
    )

}