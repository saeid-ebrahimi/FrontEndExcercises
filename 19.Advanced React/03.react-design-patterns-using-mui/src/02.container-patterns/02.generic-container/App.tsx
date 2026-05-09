import "../App.css"
import { TUser, UserInfo } from "./user-info"
import { ResourceLoader } from "./resource-loader"
import { BookInfo, TBook } from "./book-info"
import { DataSource } from "./data-source"
import axios from "axios"
import { DataSourceWithRender } from "./data-source-with-render"

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
        <DataSource getFn={() => getDataFromServer<TUser>("/api/users/3")}>
            {(resource: TUser) => <UserInfo user={resource} />}
        </DataSource>
        <DataSourceWithRender
            getFn={() => getDataFromServer<TUser>("/api/users/3")}
            render={(resource: TUser) => <UserInfo user={resource} />}
        />
        <DataSourceWithRender
            getFn={() => getDataFromLocalStorage<TUser>("user")}
            render={(resource: TUser) => <UserInfo user={resource} />}
        />
    </>
}