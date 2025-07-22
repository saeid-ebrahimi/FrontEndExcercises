import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit'
import axios from "axios";

export const registerUser = createAsyncThunk("users/register", async (data, thunkAPI) => {
    const response = await axios.post(
        "http://localhost:3000/api/v1/users/register", data
    )
    return response.data;
})
export const userSlice = createSlice({
    name: "user",
    initialState: {
        error: '',
        loading: false,
        access_token: '',
        data: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    },
    reducers: {
        changeDataField: (state, action) => {
            state.data[action.payload.fieldName] = action.payload.fieldValue
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.access_token = action.payload.access_token
            state.data = action.payload.data
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.error = action.error.message
        });
        builder.addCase(registerUser.pending, (state) => {
            state.error = "";
            state.loading = true;
        });
    }
})

export const { changeDataField } = userSlice.actions;

export default userSlice.reducer;