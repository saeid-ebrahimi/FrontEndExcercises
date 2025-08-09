export type TBook = {
  name: string;
  pages: number;
  title: string;
  price: number;
};

export type TLargeBookListItemProps = {
  book: TBook;
};
