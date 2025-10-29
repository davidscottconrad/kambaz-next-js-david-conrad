import { createSlice } from "@reduxjs/toolkit";
import { enrollments as seedEnrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

type Enrollment = { _id: string; user: string; course: string };

const initialState: { enrollments: Enrollment[] } = {
    enrollments: seedEnrollments as Enrollment[],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, { payload }: { payload: { userId: string; courseId: string } }) => {
            const exists = state.enrollments.some(
                (e) => e.user === payload.userId && e.course === payload.courseId
            );
            if (!exists) {
                state.enrollments = [
                    ...state.enrollments,
                    { _id: uuidv4(), user: payload.userId, course: payload.courseId },
                ];
            }
        },
        unenroll: (state, { payload }: { payload: { userId: string; courseId: string } }) => {
            state.enrollments = state.enrollments.filter(
                (e) => !(e.user === payload.userId && e.course === payload.courseId)
            );
        },
    },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;