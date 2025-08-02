import { createSlice } from "@reduxjs/toolkit";
import type {
  TInitialState,
  TTheme,
} from "./theme.types";

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
