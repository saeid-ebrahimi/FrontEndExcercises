import { List } from "@mui/material";
import { CategoryItem } from "../06.recursive-components/04.CategoryItem";
import { categories } from "../06.recursive-components/constants";





export default function App() {

    return <>
        {/* <List>
            <RecursiveComponent data={myNestedObject} />
        </List>
        <FileTree node={fileTree} />
        <CommentItem comment={comment} /> */}
        <List>
            {categories.map(category => <CategoryItem key={category.id} category={category} />)}
        </List>
    </>

}