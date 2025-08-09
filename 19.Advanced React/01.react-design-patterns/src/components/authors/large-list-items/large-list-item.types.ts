export type TBook = string;
export type TAuthor = {
  name: string;
  age: number;
  country: string;
  books: TBook[];
};
export type TLargeAuthorListItemProps = {
  author: TAuthor;
};
