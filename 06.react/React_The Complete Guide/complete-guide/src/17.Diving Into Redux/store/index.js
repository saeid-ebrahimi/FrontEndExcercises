import { configureStore} from '@reduxjs/toolkit'
import counterSliceReducer from "./counter-slice";
import authSliceReducer from "./auth-slice";

const store = configureStore({
    reducer: {counter: counterSliceReducer, auth: authSliceReducer}
});
export default store;
