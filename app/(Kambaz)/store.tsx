import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import coursesReducer from "./Courses/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "./Enrollments/reducer";
const store = configureStore({
    reducer: {
        coursesReducer,
        modules: modulesReducer,
        accountReducer,
        enrollments: enrollmentsReducer,
        assignments: assignmentsReducer,
    },
});
export default store;