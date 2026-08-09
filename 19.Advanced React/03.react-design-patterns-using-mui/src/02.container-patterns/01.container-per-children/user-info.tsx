import { List, ListItem, ListItemText, Typography } from "@mui/material";

export type TUser = {
    name: string; age: number, country: string, books: string[]
}
export const UserInfo = ({ user }: { user: TUser }) => {

    const { name, age, country, books } = user || {}
    return user ? <>
        <Typography component="h2" variant={"h4"}>
            {name}
        </Typography>
        <Typography component="p" variant={"body1"}>
            Age: {age}
        </Typography>
        <Typography component="p" variant={"body1"}>
            Country: {country}
        </Typography>
        <List>
            {books.map(book => <ListItem key={book}>
                <ListItemText>{book}</ListItemText>
            </ListItem>)}
        </List>
    </> : <Typography component="h2" variant={"h4"}>
        Loading
    </Typography>
}