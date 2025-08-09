import type { TBook } from "../large-list-item";

export type TSmallBookListItemProps = {
  book: Omit<TBook, "pages" | "title">;
};
