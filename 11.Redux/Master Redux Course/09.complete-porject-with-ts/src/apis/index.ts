import axios from "axios";
import type { TPost } from "../redux/posts/posts.slice";
export const getPosts = async () => {
  const response = await axios.get(
    "http://localhost:3000/posts"
  );
  return response.data;
};

export const getPostsByPage = async (
  pageNumber: number,
  pageSize: number
): Promise<TPost[]> => {
  const response = await axios.get(
    "http://localhost:3000/posts",
    {
      params: {
        _page: pageNumber,
        _limit: pageSize,
      },
    }
  );
  return response.data;
};

export const getPostById = async (
  postId: number
) => {
  if (postId === undefined || postId === null)
    return;
  const response = await axios.get(
    `http://localhost:3000/posts/${postId}`,
    {}
  );
  return response.data;
};

export const createPost = async (
  data: Omit<TPost, "id">
) => {
  const response = await axios.post(
    "http://localhost:3000/posts",
    data
  );
  return response.data;
};
