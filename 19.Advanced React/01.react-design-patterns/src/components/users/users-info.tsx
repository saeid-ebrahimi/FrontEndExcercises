// import { useGetCurrentUser } from "../../hooks/user/useGetCurrentUser";
import { useCallback } from "react"
import { getData } from "../../apis/cmsApis"
import { useDataSource } from "../../hooks/resource/useDataSource"
import { useGetResource } from "../../hooks/resource/useGetResource"
import type { TUser } from "../../hooks/user/useGetCurrentUser.types"
import { useGetUser } from "../../hooks/user/useGetUser"

export function UserInfo({ userId }: { userId: number }) {
    // const user = useGetCurrentUser();
    // const user = useGetUser(userId)
    // const user = useGetResource<TUser>(`/users/${userId}`)

    // const getDataFromServer = (url: string) => useCallback(() => getData<TUser>(url), [url])
    // const user = useDataSource<TUser>(getDataFromServer(`user/${userId}`))
    const getDataFromLocalStorage = (key: string) => useCallback(async () => {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : {}
    }
        , [key])

    const user = useDataSource<TUser>(getDataFromLocalStorage("user"))

    const { name, age, country, books } = user || {}
    return <>
        {user ?
            (<>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
                <h2>Books</h2>
                {books && books?.length > 0 ?
                    <ul>
                        {books.map(book => <li key={book}>{book}</li>)}
                    </ul> :
                    <p>No book is registered</p>}
            </>) :
            <h1>Loading User Data...</h1 >}
    </>
}