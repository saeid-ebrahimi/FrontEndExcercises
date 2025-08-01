import type { ReactNode } from "react";

export type TUser = {
  id: number;
  name: string;
  email: string;
};

export type TUserFormProps = {
  users: TUser[];
  setUsers: (users: TUser[]) => void;
};

export type TUserTableProps = {
  users: TUser[];
  children: ReactNode;
};
