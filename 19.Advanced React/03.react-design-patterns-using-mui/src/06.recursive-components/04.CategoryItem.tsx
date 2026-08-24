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

export const categories: TCategory[] = [
    {
        id: 1,
        name: "Electronics",
        children: [
            {
                id: 2,
                name: "Computers",
                children: [
                    {
                        id: 3,
                        name: "Laptops",
                        children: [
                            {
                                id: 4,
                                name: "Gaming Laptops",
                                children: [],
                            },
                            {
                                id: 5,
                                name: "Business Laptops",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 6,
                        name: "Desktop Computers",
                        children: [],
                    },
                ],
            },
            {
                id: 7,
                name: "Phones",
                children: [
                    {
                        id: 8,
                        name: "Smartphones",
                        children: [
                            {
                                id: 9,
                                name: "Android Phones",
                                children: [],
                            },
                            {
                                id: 10,
                                name: "iPhones",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 11,
                        name: "Feature Phones",
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 12,
        name: "Home & Furniture",
        children: [
            {
                id: 13,
                name: "Furniture",
                children: [
                    {
                        id: 14,
                        name: "Living Room",
                        children: [
                            {
                                id: 15,
                                name: "Sofas",
                                children: [],
                            },
                            {
                                id: 16,
                                name: "Coffee Tables",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 17,
                        name: "Bedroom",
                        children: [
                            {
                                id: 18,
                                name: "Beds",
                                children: [],
                            },
                            {
                                id: 19,
                                name: "Wardrobes",
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 20,
                name: "Home Decor",
                children: [],
            },
        ],
    },
    {
        id: 21,
        name: "Clothing",
        children: [
            {
                id: 22,
                name: "Men's Clothing",
                children: [
                    {
                        id: 23,
                        name: "Shirts",
                        children: [],
                    },
                    {
                        id: 24,
                        name: "Pants",
                        children: [],
                    },
                ],
            },
            {
                id: 25,
                name: "Women's Clothing",
                children: [
                    {
                        id: 26,
                        name: "Dresses",
                        children: [],
                    },
                    {
                        id: 27,
                        name: "Shoes",
                        children: [],
                    },
                ],
            },
        ],
    },
];
