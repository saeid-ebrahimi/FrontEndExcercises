import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { TAddUserData, TUser } from "./user.type";

// const delay = (ms: number) => {
//   new Promise((res) => setTimeout(res, ms));
// };
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // to add custom delay
    // fetchFn: async (...params) => {
    //   await delay(3000);
    //   return fetch(...params);
    // },
  }), // use fetch not axios
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => `users`,
      providesTags: ["User"],
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
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
} = userApi;
