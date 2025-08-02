import { userApi } from "./user/user.api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware
    ),
});

export type TRootState = ReturnType<
  typeof store.getState
>;

export type TAppDispatch = typeof store.dispatch;
