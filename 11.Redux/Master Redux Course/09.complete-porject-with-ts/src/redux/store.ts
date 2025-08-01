import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slice";
import postReducer from "./posts/posts.slice";
import themeReducer from "./theme/theme.slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    theme: themeReducer,
  },
});

export type TRootState = ReturnType<
  typeof store.getState
>;

export type TAppDispatch = typeof store.dispatch;
