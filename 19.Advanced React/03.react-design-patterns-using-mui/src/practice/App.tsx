import { List } from "@mui/material";
import { RecursiveComponent, TNestedObject } from "../06.recursive-components/01.dummy-example";
import { FileNode, FileTree } from "../06.recursive-components/02.FileExplorer";

const myNestedObject: TNestedObject = {
    key1: "value1",
    key2: {
        innerKey1: "innerValue1",
        innerKey2: {
            innerInnerKey1: "innerInnerValue1",
            innerInnerKey2: "innerInnerValue2",
        },
    },
    key3: "value3"
}

const fileTree: FileNode = {
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
export default function App() {

    return <>
        <List>
            <RecursiveComponent data={myNestedObject} />
        </List>
        <FileTree node={fileTree} />
    </>

}