import { countReducer } from "./count/count.reducer";

export const rootReducer = combineReducers({
    count: countReducer
})