import { API_STATUS } from "./constants";

export type TUser = {
  id: number;
  name: string;
  email: string;
};

export type TApiStatus = keyof typeof API_STATUS;

export type TApiStatusFlagKey =
  `is${Capitalize<Lowercase<string>>}`;

export type TApiStatusFlags = {
  [K in TApiStatus as `is${Capitalize<Lowercase<K>>}`]: boolean;
};

export type TUseApiStatusReturn = {
  status: TApiStatus;
  setStatus: React.Dispatch<
    React.SetStateAction<TApiStatus>
  >;
} & TApiStatusFlags;
