import type { TAuthor } from "../large-list-item";

export type TSmallAuthorListItemProps = {
  author: Omit<TAuthor, "books" | "country">;
};
