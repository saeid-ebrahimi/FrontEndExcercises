import { List } from "@mui/material";
import { CategoryItem } from "../06.recursive-components/04.CategoryItem";
import { categories, contentData, menuItems } from "../06.recursive-components/constants";
import { MenuItem, MenuItem2 } from "../06.recursive-components/05.MenuItem";
import { ContentRenderer } from "../06.recursive-components/06.PageBuilder";





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

        <List>
            {menuItems.map((item) => (
                <MenuItem2
                    key={item.title}
                    item={item}
                />
            ))}
        </List>
        <ContentRenderer node={contentData} />;
    </>

}