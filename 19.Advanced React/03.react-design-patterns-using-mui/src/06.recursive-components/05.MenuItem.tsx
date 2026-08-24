import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";


export type TMenuItem = {
    id: number;
    title: string;
    href?: string;
    children?: TMenuItem[];
};


export function MenuItem({ item, level = 0 }: { item: TMenuItem; level?: number }) {
    const hasChildren = Boolean(item.children?.length);

    return <>
        <ListItem disablePadding>
            <ListItemButton LinkComponent={"a"} href={item.href ?? ""} sx={{
                pl: 2 + level * 2,
            }}
            >
                <ListItemText primary={item.title} />
            </ListItemButton>
        </ListItem>
        {hasChildren && (
            <List disablePadding>
                {item.children?.map(item => <MenuItem item={item} key={item.id} level={level + 1} />)}
            </List>
        )}
    </>
}