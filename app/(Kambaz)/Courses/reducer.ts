import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    courses: courses,
};
export const coursesReducer = createSlice({
    name: "courses",
    initialState: {
        courses: [],
    },
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
        addNewCourse: (state, { payload: course }) => {
            const newCourse: any = {
                _id: new Date().getTime().toString(),
                name: course.name,
                number: course.number,
                startDate: course.startDate,
                endDate: course.endDate,
                description: course.description,
            };
            state.courses = [...state.courses, newCourse] as any;
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((c: any) => c._id !== courseId);
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) =>
                c._id === course._id ? course : c
            ) as any;
        },
    },
});
export const { setCourses, addNewCourse, deleteCourse, updateCourse } =
    coursesReducer.actions;
export default coursesReducer.reducer;