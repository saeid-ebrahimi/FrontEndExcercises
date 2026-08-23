import { List, ListItem } from "@mui/material";

export type FileNode = {
    name: string;
    type: "file" | "folder",
    children?: FileNode[];
};

export function FileTree({ node }: { node: FileNode }) {
    return (
        <List sx={{ paddingX: 4 }}>
            <ListItem>{node.name}</ListItem>
            {node?.children?.length !== undefined && node?.children?.length === 1 ?
                <ListItem>{node.children?.[0].name}</ListItem> :
                node?.children?.map((child) => <FileTree node={child} />)}
        </List>
    )
}