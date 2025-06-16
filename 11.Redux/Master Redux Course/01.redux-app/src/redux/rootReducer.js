import { countReducer } from "./count/count.reducer";

export const rootReducer = combineReducers({
    count: countReducer
})

// run npm i
// run npm i redux react-redux