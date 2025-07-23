import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit'
import axios from "axios";

export const createPost = createAsyncThunk("post/create", async (data) => {
    const accessToken = localStorage.getItem("access_token")
    const response = await axios.post('http://localhost:3000/api/v1/posts', data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return response.data
})


export const postSlice = createSlice({
    name: "post",
    initialState: {
        error: "",
        loading: false,
        data: {
            title: "",
            description: ""
        }
    },
    reducers: {
        changeDataField: (state, action) => {
            state.data[action.payload.fieldName] = action.payload.fieldValue;
        },
        resetData: (state) => {
            state.data = {
                title: "",
                description: ""
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            // state.data = action.payload.data;
        })
        builder.addCase(createPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        builder.addCase(createPost.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
    }
})

export const { changeDataField, resetData } = postSlice.actions;
export default postSlice.reducer;