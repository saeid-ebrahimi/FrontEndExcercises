import { useState } from "react";
import { useApiStatus } from "./useApiStatus";
import { API_STATUS } from "../constants";

export function useApi<
  T,
  TArgs extends unknown[] = [],
>(
  fn: (...args: TArgs) => Promise<{ data: T }>,
  config?: { initialData: T },
) {
  const [data, setData] = useState<T | null>(
    config?.initialData ?? null,
  );
  const [error, setError] = useState<Error>();
  const {
    status,
    setStatus,
    ...normalizedStatuses
  } = useApiStatus();

  const execute = async (...args: TArgs) => {
    try {
      setStatus(API_STATUS.PENDING);
      const response = await fn(...args);
      console.log(response);

      setData(response.data);
      setStatus(API_STATUS.SUCCESS);
      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error as Error);
      setStatus(API_STATUS.ERROR);
      return {
        data: null,
        error,
      };
    }
  };

  return {
    data,
    setData,
    status,
    setStatus,
    execute,
    error,
    ...normalizedStatuses,
  };
}
