import { useGetCurrentUser } from "../../hooks/user/useGetCurrentUser"

export function UserInfo() {
    const user = useGetCurrentUser();
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