
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/[cid]/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/[cid]/Assignments/reducer"
import peopleReducer from "./Courses/[cid]/People/reducer"


const store = configureStore({
    reducer: {
        coursesReducer, modulesReducer, accountReducer, assignmentReducer, peopleReducer,

    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;

