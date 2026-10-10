import { useState } from "react";
import { fetchUsers } from "../api/userApi";
import { TUser } from "../type";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const initialFetch = async () => {
    const response = await fetchUsers();
    setUsers(response.data);
  };
  return {
    users,
    initFetchUsers: initialFetch,
  };
};
