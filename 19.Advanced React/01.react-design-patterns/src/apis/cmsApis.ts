import type { TAuthor } from "./../components/authors/large-list-item/large-list-item.types";
import axiosInstance from "./axiosInstance";

export async function getData<T>(
  getUrl: string
): Promise<T> {
  const response = await axiosInstance.get<T>(
    getUrl
  );
  return response.data;
}

export async function postData<T>(
  postUrl: string,
  user: TAuthor
): Promise<T> {
  const response = await axiosInstance.post<T>(
    postUrl,
    { user }
  );
  return response.data;
}
