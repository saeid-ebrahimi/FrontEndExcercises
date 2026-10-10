import axios, {
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

const axiosParams = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "/",
};

const axiosInstance = axios.create(axiosParams);

const api = (instance: AxiosInstance) => {
  return {
    get: <T = unknown>(
      url: string,
      config: AxiosRequestConfig = {},
    ): Promise<T> => instance.get(url, config),
    delete: <T = unknown>(
      url: string,
      config: AxiosRequestConfig = {},
    ): Promise<T> => instance.delete(url, config),
    post: <T = unknown>(
      url: string,
      body?: unknown,
      config: AxiosRequestConfig = {},
    ): Promise<T> =>
      instance.post(url, body, config),
    patch: <T = unknown>(
      url: string,
      body?: unknown,
      config: AxiosRequestConfig = {},
    ): Promise<T> =>
      instance.patch(url, body, config),
    put: <T = unknown>(
      url: string,
      body?: unknown,
      config: AxiosRequestConfig = {},
    ): Promise<T> =>
      instance.put(url, body, config),
  };
};

export default api(axiosInstance);
