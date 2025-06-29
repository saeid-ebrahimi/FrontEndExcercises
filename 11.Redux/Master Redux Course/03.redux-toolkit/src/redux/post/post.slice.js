import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getAllPosts", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (response.status === 404)
            throw new Error("Not Found")
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(error.message)
    }
})

const initialState = {
    data: [],
    error: null,
    isLoading: false
}
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.error = null
            state.data = action.payload
            state.isLoading = false
        });
        builder.addCase(getPosts.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false
        });
    }
})
// export const { add } = postSlice.actions

export default postSlice.reducer;