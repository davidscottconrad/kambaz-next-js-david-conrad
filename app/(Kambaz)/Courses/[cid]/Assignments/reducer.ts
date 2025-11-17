import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const {
                name,
                course,
                points,
                due,
                available,
                availableUntil,
                module,
                description,
                displayGradeAs,
                submissionType,
                onlineEntryOptions,
                assignTo,
                lessons,
            } = assignment || {};
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                name,
                course,
                lessons: lessons ?? [],
                points,
                due,
                available,
                availableUntil,
                module,
                description,
                displayGradeAs,
                submissionType,
                onlineEntryOptions,
                assignTo,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? { ...a, ...assignment } : a
            ) as any;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;