import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import coursesReducer from "./Courses/reducer";

const store = configureStore({
    reducer: {
        coursesReducer,
        modules: modulesReducer
    },
});
export default store;