type TBBook = {
    book: string
}
export type TUser = {
    name: string; age: number, country: string, books: string[]
}
export const UserInfo = ({ user }: { user: TUser }) => {

    const { name, age, country, books } = user || {}
    return user ? <>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <ul>
            {books.map(book => <li key={book}>{book}</li>)}
        </ul>
    </> : <h1>Loading</h1>
}