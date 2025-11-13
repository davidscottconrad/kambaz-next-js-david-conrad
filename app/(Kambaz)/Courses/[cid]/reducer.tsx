/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//(1) The Reducer pattern (State + Action ---> New State) 
//(2) Reducer Function: A pure function that takes the old State and the Action 
//    as input, and returns a completely new State
//(3) Immutability:You never modify the state directly. Instead, the reducer function returns 
//    a brand new state object or array whenever a change occurs.
//    This is critical for performance and predictability in React and Redux, 
//    as it allows them to efficiently detect changes and trigger UI updates
export type Course = {
    _id: string;
    name: string;
}
export interface CoursesState {
    courses: Course[];
}
const initialState = {
    courses: [],           // Current user's enrolled courses
    allCourses: [],        // All available courses in the system
    showAllCourses: false, // Toggle state for "Enrollments" button
}
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }) => {
            const newCourse = { ...course, _id: uuidv4() };
            state.courses = [...state.courses, newCourse] as any;
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (course: any) => course._id !== courseId
            );
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c) as any;
        },
        setCourses: (state, { payload: courses }) => {
            state.courses = courses;
        },
        setAllCourses: (state, action) => {
            state.allCourses = action.payload;
        },
        toggleShowAllCourses: (state) => {
            state.showAllCourses = !state.showAllCourses;
        },
        enrollInCourse: (state, action) => {
            const course = state.allCourses.find((c: any) => c._id === action.payload);
            if (course && !state.courses.find((c: any) => c._id === action.payload)) {
                state.courses = [...state.courses, course];
            }
        },
        unenrollFromCourse: (state, action) => {
            state.courses = state.courses.filter((c: any) => c._id !== action.payload);
        },



    }
});
export const { addNewCourse, deleteCourse, updateCourse, setCourses, setAllCourses, toggleShowAllCourses, enrollInCourse, unenrollFromCourse } =
    coursesSlice.actions;
export default coursesSlice.reducer;



