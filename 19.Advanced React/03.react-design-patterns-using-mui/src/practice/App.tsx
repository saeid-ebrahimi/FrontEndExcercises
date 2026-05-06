import "../App.css"
import { TUser, UserInfo } from "../02.container-patterns/01.container-per-children/user-info"
import { UserLoader } from "../02.container-patterns/01.container-per-children/user-loader"
import { ResourceLoader } from "../02.container-patterns/02.generic-container/resource-loader"
import { BookInfo, TBook } from "../02.container-patterns/01.container-per-children/book-info"

export default function App() {
    return <>
        <ResourceLoader resourceUrl={"/users/3"}>
            {(resource: TUser) => <UserInfo user={resource} />}
        </ResourceLoader>
        <ResourceLoader resourceUrl={"/books/3"}>
            {(resource: TBook) => <BookInfo book={resource} />}
        </ResourceLoader>
    </>
}