import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit'
import axios from "axios";

export const registerUser = createAsyncThunk("users/register", async (data) => {
    const response = await axios.post(
        "http://localhost:3000/api/v1/users/register", data
    )
    return response.data;
})

export const loginUser = createAsyncThunk("users/login", async (data) => {
    const response = await axios.post("http://localhost:3000/api/v1/users/login", data)
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        error: '',
        loading: false,
        access_token: '',
        isAuthenticated: false,
        data: {
            firstName: "",
            lastName: "",
            email: "",
        }
    },
    reducers: {
        changeDataField: (state, action) => {
            state.data[action.payload.fieldName] = action.payload.fieldValue
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = ""
            state.access_token = action.payload.access_token
            state.data = action.payload.data
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false
            state.error = action.error.message
        });
        builder.addCase(registerUser.pending, (state) => {
            state.error = "";
            state.loading = true;
        });
        builder.addCase(loginUser.rejected, (state) => {
            state.error = action.error.message;
            state.isAuthenticated = false;
            state.loading = false
        });
        builder.addCase(loginUser.pending, (state) => {
            state.error = "";
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.error = "";
            state.loading = false;
            state.isAuthenticated = true;
            state.access_token = action.payload.access_token;
            state.data.firstName = action.payload.data.firstName;
            state.data.lastName = action.payload.data.lastName;
            state.data.email = action.payload.data.email
        })
    }
})

export const { changeDataField } = userSlice.actions;

export default userSlice.reducer;