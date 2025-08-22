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
  data: T
): Promise<T> {
  const response = await axiosInstance.post<T>(
    postUrl,
    { data }
  );
  return response.data;
}
