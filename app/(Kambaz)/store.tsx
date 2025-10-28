import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import coursesReducer from "./Courses/reducer";
import accountReducer from "./Account/reducer";
const store = configureStore({
    reducer: {
        coursesReducer,
        modules: modulesReducer,
        accountReducer,
    },
});
export default store;