import { List, ListItem, ListItemText } from "@mui/material";


export type TCategory = {
    id: number;
    name: string;
    children: TCategory[];
};

export function CategoryItem({ category, level = 0 }: { category: TCategory, level?: number }) {
    return <ListItem sx={{
        pl: level * 2,
        mr: 1,
        borderLeft: level > 0 ? "3px solid darkblue" : "none"
    }}>
        <ListItemText primary={category.name} />
        {category.children.length > 0 && (
            <List>
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

