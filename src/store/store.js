import { configureStore } from "@reduxjs/toolkit";
import expReducer from "../reducers/expReducer";

export const store = configureStore({
    reducer: {
        expReducer,
    },
});

export default store