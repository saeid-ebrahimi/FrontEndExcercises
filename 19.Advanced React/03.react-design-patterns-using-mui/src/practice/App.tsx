import { List } from "@mui/material";
import { CategoryItem } from "../06.recursive-components/04.CategoryItem";
import { categories, menuItems } from "../06.recursive-components/constants";
import { MenuItem } from "../06.recursive-components/05.MenuItem";





export default function App() {

    return <>
        {/* <List>
            <RecursiveComponent data={myNestedObject} />
        </List>
        <FileTree node={fileTree} />
        <CommentItem comment={comment} /> */}
        <List sx={{ pl: 1, width: "fit-content" }}>
            {categories.map(category => <CategoryItem key={category.id} category={category} />)}
        </List>

        <List>
            {menuItems.map((item) => (
                <MenuItem
                    key={item.title}
                    item={item}
                />
            ))}
        </List>
    </>

}