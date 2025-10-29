import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            console.log("Adding assignment:", assignment);
            const newAssignment: any = {
                _id: uuidv4(),
                lessons: [],
                name: assignment.name,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },

    },
});
export const { addAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;