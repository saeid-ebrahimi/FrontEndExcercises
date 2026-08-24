import { List, ListItem } from "@mui/material";
export type TNestedObject = {
    [key: string]: string | number | boolean | TNestedObject;
}

const isObject = (data: TNestedObject) => typeof data === "object" && data !== null;


export const RecursiveComponent = ({ data }: { data: TNestedObject }) => {
    if (!isObject(data)) return <ListItem>{data?.toString()}</ListItem>
    const pairs = Object.entries(data);

    return <>
        {pairs.map(([key, value]) => {
            return (
                <ListItem>
                    {key}:
                    <List>
                        <RecursiveComponent data={value as TNestedObject} />
                    </List>
                </ListItem>
            )
        })}
    </>
}

