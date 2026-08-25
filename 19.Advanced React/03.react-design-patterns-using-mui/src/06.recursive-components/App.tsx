import { List } from "@mui/material";
import { CategoryItem } from "../06.recursive-components/04.CategoryItem";
import { categories, comment, contentData, expression1, expression2, fileTree, menuItems, myNestedObject, permissions } from "../06.recursive-components/constants";
import { MenuItem, MenuItem2 } from "../06.recursive-components/05.MenuItem";
import { ContentRenderer } from "../06.recursive-components/06.PageBuilder";
import { ExpressionNode } from "../06.recursive-components/07.expression-tree";
import { PermissionList } from "../06.recursive-components/08.permision-tree";
import { ObjectViewer } from "../06.recursive-components/09.object-viewer";
import { RecursiveComponent } from "../06.recursive-components/01.dummy-example";
import { FileTree } from "../06.recursive-components/02.FileExplorer";
import { CommentItem } from "../06.recursive-components/03.CommnetItem";





export default function App() {

    return <>
        <List>
            <RecursiveComponent data={myNestedObject} />
        </List>
        <FileTree node={fileTree} />
        <CommentItem comment={comment} />
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
        <ContentRenderer node={contentData} />
        <ExpressionNode node={expression1} />
        <ExpressionNode node={expression2} />
        <PermissionList permissions={permissions} />
        <ObjectViewer value={{
            name: "Saeid",
            age: 28,
            isActive: true,
            contact: {
                email: "saeid@example.com",
                gmail: "saeid@example2.com"
            },
        }} />
    </>

}