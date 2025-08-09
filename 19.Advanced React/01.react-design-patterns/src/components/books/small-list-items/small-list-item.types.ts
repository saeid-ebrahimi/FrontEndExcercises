import type { TBook } from "../large-list-items"

export type TSmallBookListItemProps = {
    book: Omit<TBook, "pages" | "title">
}
