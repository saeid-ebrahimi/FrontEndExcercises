import { useState } from "react";
import {
  fetchUsers,
  withAsync,
  API_STATUS,
  useApiStatus,
  type TUser,
} from "..";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [error, setError] =
    useState<Error | null>(null);

  const {
    status: fetchUsersStatus,
    setStatus: setFetchUsersStatus,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isError: isFetchUsersStatusError,
    isSuccess: isFetchUsersStatusSuccess,
  } = useApiStatus();

  const initialFetch = async () => {
    setFetchUsersStatus(API_STATUS.PENDING);
    const { response, error } =
      await withAsync(fetchUsers);
    if (error) {
      setError(error as Error);
      setFetchUsersStatus(API_STATUS.ERROR);
    } else {
      setUsers(response);
      setFetchUsersStatus(API_STATUS.SUCCESS);
    }
  };

  return {
    users,
    fetchUsersStatus,
    setFetchUsersStatus,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusError,
    isSuccess: isFetchUsersStatusSuccess,
    error,
    initFetchUsers: initialFetch,
  };
};
