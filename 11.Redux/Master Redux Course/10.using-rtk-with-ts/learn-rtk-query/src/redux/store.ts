import { postApi } from "./post/post.api";
import { userApi } from "./user/user.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      postApi.middleware
    ),
});

export type TRootState = ReturnType<
  typeof store.getState
>;

export type TAppDispatch = typeof store.dispatch;
