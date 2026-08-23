import { List } from "@mui/material";
import { RecursiveComponent, TNestedObject } from "../06.recursive-components/01.dummy-example";

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
export default function App() {

    return <>
        <List>
            <RecursiveComponent data={myNestedObject} />
        </List>
    </>

}