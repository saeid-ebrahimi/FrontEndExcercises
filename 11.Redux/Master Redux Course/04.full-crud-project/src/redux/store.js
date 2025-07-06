import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slice"
import postReducer from "./posts/posts.slice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
    }
})