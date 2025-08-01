import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: localStorage.getItem("theme") || "light"
}
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload
            localStorage.setItem("theme", action.payload)
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;