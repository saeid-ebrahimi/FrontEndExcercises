import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk("posts/getAll", async () => {
    try {
        const response = await axios.get("http://localhost:3000/posts");
        return response.data;
    } catch (error) {
        throw new Error(error.message)
    }
})

export const getPostById = createAsyncThunk("posts/getById", async (postId) => {
    try {
        const response = await axios.get(`http://localhost:3000/posts?${postId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.message)
    }
})

export const createPost = createAsyncThunk("posts/create", async (data) => {
    try {
        const response = await axios.post("http://localhost:3000/posts", data);
        return response.data;
    } catch (error) {
        throw new Error(error.message)
    }
})

const initialState = {
    isLoading: false,
    error: null,
    data: [],
    post: {
        title: "",
        views: 0,
    }
}
export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.isLoading = true;
            state.error = null
        });

        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        });

        builder.addCase(getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        });

        builder.addCase(createPost.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(createPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = [...state.data, action.payload]
        });

        builder.addCase(createPost.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(getPostById.pending, (state, action) => {
            state.isLoading = true;
            state.error = null
        });

        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.post = action.payload;
        });

        builder.addCase(getPostById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });


    }
})

export default postSlice.reducer;