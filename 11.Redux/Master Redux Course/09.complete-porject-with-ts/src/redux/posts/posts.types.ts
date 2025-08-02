export type TPost = {
  id: number | undefined;
  title: string;
  views: number;
};
export type TInitialState = {
  isLoading: boolean;
  error: Partial<Error> | null;
  data: TPost[];
  post: TPost;
};
