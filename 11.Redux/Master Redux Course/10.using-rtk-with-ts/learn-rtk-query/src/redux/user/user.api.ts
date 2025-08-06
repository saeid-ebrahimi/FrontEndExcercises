import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { TAddUserData, TUser } from "./user.type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }), // use fetch not axios
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => `users`,
    }),
    addUser: builder.mutation<
      TUser,
      TAddUserData
    >({
      query: (data) => ({
        url: `users`,
        method: "Post",
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
} = userApi;
