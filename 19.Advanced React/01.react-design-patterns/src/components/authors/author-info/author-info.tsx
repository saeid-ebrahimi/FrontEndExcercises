import type { TAuthor } from "../large-list-item"
import type { TAutherInfoProps } from "./author-info.types"

export function AuthorInfo<T extends TAuthor>({ data }: TAutherInfoProps<T>) {
    if (!data)
        return <>data is empty</>
    const { name, age, country } = data
    return (
        <>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h3>Books</h3>
        </>
    )
}