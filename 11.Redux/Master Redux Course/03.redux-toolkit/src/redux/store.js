import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slice"
export const store = configureStore({
    reducer: {
        count: counterReducer,
    },
})