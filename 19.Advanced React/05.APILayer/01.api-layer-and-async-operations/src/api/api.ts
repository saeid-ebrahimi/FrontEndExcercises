import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

const axiosParams = {
  baseURL: "http://localhost:8080",
};

const axiosInstance = axios.create(axiosParams);

const api = (instance: AxiosInstance) => {
  return {
    get: (
      url: string,
      config: AxiosRequestConfig = {},
    ) => instance.get(url, config),
    delete: (
      url: string,
      config: AxiosRequestConfig = {},
    ) => instance.delete(url, config),
    post: (
      url: string,
      body?: unknown,
      config: AxiosRequestConfig = {},
    ) => instance.post(url, body, config),
    patch: (
      url: string,
      body?: unknown,
      config: AxiosRequestConfig = {},
    ) => instance.patch(url, body, config),
    put: (
      url: string,
      body?: unknown,
      config: AxiosRequestConfig = {},
    ) => instance.put(url, body, config),
  };
};

export default api(axiosInstance);
