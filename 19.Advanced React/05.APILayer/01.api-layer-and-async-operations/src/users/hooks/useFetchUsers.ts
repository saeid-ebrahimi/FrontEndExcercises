import { useState } from "react";
import {
  fetchUsers,
  withAsync,
  API_STATUS,
  type TUser,
} from "..";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [error, setError] =
    useState<Error | null>(null);
  const [fetchStatus, setFetchStatus] = useState<
    keyof typeof API_STATUS
  >(API_STATUS.IDLE);

  const initialFetch = async () => {
    setFetchStatus(API_STATUS.PENDING);
    const { response, error } =
      await withAsync(fetchUsers);
    if (error) {
      setError(error as Error);
      setFetchStatus(API_STATUS.ERROR);
    } else {
      setUsers(response);
      setFetchStatus(API_STATUS.SUCCESS);
    }
  };

  return {
    users,
    fetchStatus,
    error,
    initFetchUsers: initialFetch,
  };
};
