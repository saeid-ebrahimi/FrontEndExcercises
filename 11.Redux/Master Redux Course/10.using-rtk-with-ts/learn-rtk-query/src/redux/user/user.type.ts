export type TUser = {
  id: string;
  name: string;
  email: string;
};

export type TAddUserData = Omit<TUser, "id">;
