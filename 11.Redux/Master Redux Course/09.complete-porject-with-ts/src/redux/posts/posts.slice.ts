import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { TInitialState, TPost } from "./posts.types";
export const getPosts = createAsyncThunk(
  "posts/getAll",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/posts"
      );
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

export const getPostById = createAsyncThunk(
  "posts/getById",
  async (postId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/posts/${postId}`
      );
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/create",
  async (data: Omit<TPost, "id">) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/posts",
        data
      );
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/update",
  async (data: TPost, _thunkApi) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/posts/${data.id}`,
        { title: data.title, views: data.views }
      );
      // thunkApi.dispatch(getPosts()) # we handle update in front-end
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (data: number, _thunkApi) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/posts/${data}`
      );
      // thunkApi.dispatch(getPosts()) # we handle delete post in front-end
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

const initialState: TInitialState = {
  isLoading: false,
  error: null,
  data: [],
  post: {
    id: undefined,
    title: "",
    views: 0,
  },
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changePostTitle: (state, action) => {
      state.post.title = action.payload;
    },
    changePostViews: (state, action) => {
      state.post.views = action.payload;
    },
    editPost: (state, action) => {
      state.post = action.payload;
    },
    resetPost: (state, _action) => {
      state.post = initialState.post;
    },
    setPosts: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getPosts.pending,
      (state, _action) => {
        state.isLoading = true;
        state.error = null;
      }
    );

    builder.addCase(
      getPosts.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      }
    );

    builder.addCase(
      getPosts.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }
    );

    builder.addCase(
      createPost.pending,
      (state, _action) => {
        state.isLoading = true;
        state.error = null;
      }
    );

    builder.addCase(
      createPost.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = [
          ...state.data,
          action.payload,
        ];
      }
    );

    builder.addCase(
      createPost.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }
    );

    builder.addCase(
      getPostById.pending,
      (state, _action) => {
        state.isLoading = true;
        state.error = null;
      }
    );

    builder.addCase(
      getPostById.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.post = action.payload;
      }
    );

    builder.addCase(
      getPostById.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }
    );

    builder.addCase(
      updatePost.pending,
      (state, _action) => {
        state.isLoading = true;
        state.error = null;
      }
    );

    builder.addCase(
      updatePost.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.error = null;
        const postId = action.payload.id;
        const newPosts = state.data.map(
          (oldPost) => {
            if (oldPost.id === postId) {
              return {
                id: postId,
                title: action.payload.title,
                views: parseInt(
                  action.payload.views
                ),
              };
            } else {
              return oldPost;
            }
          }
        );
        state.data = [...newPosts];
      }
    );

    builder.addCase(
      updatePost.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }
    );

    builder.addCase(
      deletePost.pending,
      (state, _action) => {
        state.isLoading = true;
        state.error = null;
      }
    );

    builder.addCase(
      deletePost.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newPosts = state.data.filter(
          (post) => post.id !== action.payload.id
        );
        state.data = newPosts;
      }
    );

    builder.addCase(
      deletePost.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }
    );
  },
});
export const {
  changePostTitle,
  changePostViews,
  editPost,
  setPosts,
} = postSlice.actions;
export default postSlice.reducer;
