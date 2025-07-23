import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice"
import postReducer from "./post/post.slice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
    },
})