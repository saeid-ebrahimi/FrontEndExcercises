import { countReducer } from "./count/count.reducer";
import { combineReducers } from "redux";
import { unboxGiftReducer } from "./unboxGift/unboxGift.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    count: countReducer,
    gift: unboxGiftReducer,
    user: userReducer
})
