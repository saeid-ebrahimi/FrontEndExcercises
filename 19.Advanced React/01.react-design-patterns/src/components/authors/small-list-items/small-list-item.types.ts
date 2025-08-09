import type { TAuthor } from "../large-list-items"

export type TSmallAuthorListItemProps = {
    author: Omit<TAuthor, "books" | "country">
}