export type TPostResponse = {
  id: string;
  title: string;
  userId: string;
};

export type TAddPostData = Omit<
  TPostResponse,
  "id"
>;
