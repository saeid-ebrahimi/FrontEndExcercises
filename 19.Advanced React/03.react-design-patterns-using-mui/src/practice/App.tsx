import "../App.css"
import { TUser, UserInfo } from "../02.container-patterns/01.container-per-children/user-info"
import { ResourceLoader } from "../02.container-patterns/02.generic-container/resource-loader"
import { BookInfo, TBook } from "../02.container-patterns/01.container-per-children/book-info"
import { DataSource } from "../02.container-patterns/02.generic-container/data-source"
import axios from "axios"
import { DataSourceWithRender } from "../02.container-patterns/02.generic-container/data-source-with-render"

async function getDataFromServer<T>(url: string): Promise<T> {
    // try {
    const response = await axios.get(url);
    return response.data
    // } catch (error) {
    //     // convert error to readable
    //     // convertError(error)
    //     // throw new Error(error.message)
    // }
}

const getDataFromLocalStorage = <T,>(key: string): T => {
    {
        const stored = localStorage.getItem(key);
        if (!stored) throw new Error(`No data found for key "${key}"`);
        return JSON.parse(stored) as T;
    };
};

export default function App() {
    return <>
        <ResourceLoader resourceUrl={"/users/3"}>
            {(resource: TUser) => <UserInfo user={resource} />}
        </ResourceLoader>
        <ResourceLoader resourceUrl={"/books/3"}>
            {(resource: TBook) => <BookInfo book={resource} />}
        </ResourceLoader>
        <DataSource getFn={() => getDataFromServer<TUser>("/users/3")}>
            {(resource: TUser) => <UserInfo user={resource} />}
        </DataSource>
        <DataSourceWithRender
            getFn={() => getDataFromServer<TUser>("/users/3")}
            render={(resource: TUser) => <UserInfo user={resource} />}
        />
        <DataSource getFn={() => getDataFromLocalStorage<TUser>("user")}>
            {(resource: TUser) => <UserInfo user={resource} />}
        </DataSource>
        <DataSourceWithRender
            getFn={() => getDataFromLocalStorage<TUser>("user")}
            render={(resource: TUser) => <UserInfo user={resource} />}
        />
    </>
}