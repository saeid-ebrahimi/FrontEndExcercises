import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  TAddPostData,
  TPostResponse,
} from "./post.type";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<
      TPostResponse[],
      string
    >({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: ["Post"],
    }),
    addPost: builder.mutation<
      TPostResponse,
      TAddPostData
    >({
      query: (postData) => ({
        url: "posts",
        method: "POST",
        body: JSON.stringify(postData),
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
} = postApi;
