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
                <Typography component="h2" variant={"h4"}>{name}</Typography>
                <Typography component="p" variant={"body1"}>
                    Price: ${price.toFixed(2)}
                </Typography>
                <Typography component="h3" variant={"h5"}>
                    Title:
                </Typography>
                <Typography component="p" variant={"body1"}>
                    {title}
                </Typography>
                <Typography component="p" variant={"body1"}>
                    Number of Pages: {pages}
                </Typography>
            </> : <Typography component="h2" variant={"h4"}>
                Loading
            </Typography>}

        </>
    )

}