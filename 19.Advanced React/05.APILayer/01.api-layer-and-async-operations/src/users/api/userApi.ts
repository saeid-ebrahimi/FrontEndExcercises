import { AxiosResponse } from "axios";
import api from "../../api/api";
import { TUser } from "../type";

const URLS = {
  fetchUsersUrl: "users",
};

export const fetchUsers = () => {
  return api.get<AxiosResponse<any, TUser[]>>(
    URLS.fetchUsersUrl,
    {
      baseURL:
        "https://jsonplaceholder.typicode.com/",
    },
  );
};
