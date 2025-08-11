import axiosInstance from "./axiosInstance";

export async function getData<T>(
  getUrl: string
): Promise<T> {
  const response = await axiosInstance.get<T>(
    getUrl
  );
  return response.data;
}
