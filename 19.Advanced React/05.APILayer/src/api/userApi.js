import api from "./api";

const URLS = {
  fetchUsersUrl: "users",
};

export const fetchUser = () => {
  return api.get(URLS.fetchUsersUrl, {
    baseURL: "https://jsonplaceholder.typicode.com/",
  });
};
