import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./features/resumeSlice";
import bicycleSlice from "./features/bicycleSlice";

const store = configureStore({
    reducer:{
        resume:resumeSlice,
        bicycle:bicycleSlice
    }
})

export default store;