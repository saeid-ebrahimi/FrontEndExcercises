import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import Typography from "@mui/material/Typography";

export type TUser = {
    name: string; age: number, country: string, books: string[]
}
export const UserInfo = ({ user }: { user: TUser }) => {

    const { name, age, country, books } = user || {}
    return user ? <>
        <Typography component={"h2"}>{name}</Typography>
        <Typography component={"p"}>Age: {age}</Typography>
        <Typography component={"p"}>Country: {country}</Typography>
        <List sx={{ display: "flex", gap: "1rem" }} dense subheader={<ListSubheader sx={{ textAlign: "center" }}>Books</ListSubheader>}>
            {books?.map(book => <ListItem key={book}>
                <ListItemText>{book}</ListItemText>
            </ListItem>)}
        </List>
    </> : <Typography component={"h1"}>Loading</Typography>
}