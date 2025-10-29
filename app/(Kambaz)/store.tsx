import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import coursesReducer from "./Courses/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";

const store = configureStore({
    reducer: {
        coursesReducer,
        modules: modulesReducer,
        accountReducer,
        assignments: assignmentsReducer,
    },
});
export default store;