import { List, ListItem, ListItemText } from "@mui/material";


export type TCategory = {
    id: number;
    name: string;
    children: TCategory[];
};

export function CategoryItem({ category, level = 0 }: { category: TCategory, level?: number }) {
    return <ListItem sx={{
        pl: level * 3,
    }}>
        <ListItemText primary={category.name} />
        {category.children.length > 0 && (
            <List disablePadding>
                {category.children.map((child) => (
                    <CategoryItem
                        key={child.id}
                        category={child}
                        level={level + 1}
                    />
                ))}
            </List>
        )}
    </ListItem>
}

