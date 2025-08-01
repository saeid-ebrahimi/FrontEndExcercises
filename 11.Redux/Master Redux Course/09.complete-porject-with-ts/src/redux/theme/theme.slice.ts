import { createSlice } from "@reduxjs/toolkit";
export type TTheme = "dark" | "light";
type TInitialState = {
  theme: TTheme;
};
const initialState: TInitialState = {
  theme:
    (localStorage.getItem("theme") as TTheme) ||
    "light",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem(
        "theme",
        action.payload
      );
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
