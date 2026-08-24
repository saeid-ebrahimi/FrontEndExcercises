import { List, ListItem } from "@mui/material";

export type TFileNode = {
    name: string;
    type: "file" | "folder",
    children?: TFileNode[];
};

export function FileTree({ node }: { node: TFileNode }) {
    return (
        <List sx={{ paddingX: 4 }}>
            <ListItem>{node.name}</ListItem>
            {node?.children?.length !== undefined && node?.children?.length === 1 ?
                <ListItem>{node.children?.[0].name}</ListItem> :
                node?.children?.map((child) => <FileTree node={child} />)}
        </List>
    )
}

export const fileTree: TFileNode = {
    name: "src",
    type: "folder",
    children: [
        {
            name: "components",
            type: "folder",
            children: [
                {
                    name: "Button.tsx",
                    type: "file",
                },
                {
                    name: "Card.tsx",
                    type: "file",
                },
            ],
        },
        {
            name: "hooks",
            type: "folder",
            children: [
                {
                    name: "useAuth.ts",
                    type: "file",
                },
            ],
        },
        {
            name: "index.ts",
            type: "file",
        },
    ],
};
