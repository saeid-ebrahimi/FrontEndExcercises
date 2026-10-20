import { fetchUsers, type TUser } from "..";
import { useApi } from "./useApi";

export const useFetchUsers = () => {
  const {
    data: users,
    error,
    execute: initFetchUsers,
    status: fetchUsersStatus,
    setStatus: setFetchUsersStatus,
    isIdle: isFetchUsersStatusIdle,
    isPending: isFetchUsersStatusPending,
    isError: isFetchUsersStatusError,
    isSuccess: isFetchUsersStatusSuccess,
  } = useApi<TUser[]>(() => fetchUsers());

  return {
    users,
    fetchUsersStatus,
    setFetchUsersStatus,
    isFetchUsersStatusIdle,
    isFetchUsersStatusPending,
    isFetchUsersStatusError,
    isSuccess: isFetchUsersStatusSuccess,
    error,
    initFetchUsers,
  };
};
