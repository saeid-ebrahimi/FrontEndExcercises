import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";


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

export function MenuItem2({ item, level = 0 }: { item: TMenuItem; level?: number }) {
    const [open, setOpen] = useState(false);
    const hasChildren = Boolean(item.children?.length);

    return <>
        <ListItemButton onClick={() => hasChildren && setOpen((prev) => !prev)}
            component={hasChildren ? "div" : "a"}
            href={!hasChildren ? item.href : undefined} sx={{
                pl: 2 + level * 2,
            }}
        >
            <ListItemText primary={item.title} />

            {hasChildren && (
                <ExpandMoreIcon
                    sx={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                    }}
                />
            )}
        </ListItemButton>

        {hasChildren && (
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {item.children?.map((child) =>
                        <MenuItem2
                            key={child.id}
                            item={child}
                            level={level + 1} />
                    )}
                </List>
            </Collapse>
        )}
    </>
}