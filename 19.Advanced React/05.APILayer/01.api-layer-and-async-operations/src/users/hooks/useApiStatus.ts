import { useMemo, useState } from "react";
import {
  type TApiStatus,
  type TApiStatusFlagKey,
  type TApiStatusFlags,
  type TUseApiStatusReturn,
  API_STATUS,
} from "..";

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

export const prepareStatuses = (
  currentStatus: TApiStatus,
): TApiStatusFlags => {
  const statuses: TApiStatusFlags = {};
  for (const status of Object.keys(
    API_STATUS,
  ) as TApiStatus[]) {
    const normalizedStatus = capitalize(
      status.toLowerCase(),
    );
    const normalizedStatusKey =
      `is${normalizedStatus}` as TApiStatusFlagKey;
    statuses[normalizedStatusKey] =
      status === currentStatus;
  }
  return statuses;
};

export const useApiStatus = (
  currentStatus: TApiStatus = API_STATUS.IDLE,
): TUseApiStatusReturn => {
  const [status, setStatus] = useState(
    currentStatus,
  );

  const statuses = useMemo(
    () => prepareStatuses(status),
    [status],
  );

  return {
    status,
    setStatus,
    ...statuses,
  };
};
