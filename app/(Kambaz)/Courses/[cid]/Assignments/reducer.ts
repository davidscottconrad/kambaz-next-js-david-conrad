/* eslint-disable @typescript-eslint/no-explicit-any */

import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

const initialState = {
  assignments: [] as any[],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, {payload: assignment}) => {
      console.log('-----Assignment Reducer----')
      const newAssignment: any = {
        _id:uuidv4(),
        name: assignment.name,
        course: assignment.course,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        until: assignment.until,      
      }
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    updateAssignment: (state, {payload: assignment}) => {
      state.assignments = state.assignments.map((a: any) => {
        // 'assignment' here is the payload, expected to be { _id: string; changes: Partial<Assignment> }
        if (a._id === assignment._id) {
            const changes = assignment.changes || {}; 
            return {
                ...a,
                ...changes,
                name: changes.name !== undefined
                    ? String(changes.name)
                    : a.name,
                points: changes.points !== undefined
                    ? Number(changes.points)
                    : a.points,
                course: changes.course !== undefined
                    ? String(changes.course)
                    : a.course,
            };
        } return a;
    }) as any; 
  },
  
  deleteAssignment: (state, { payload: assignmentId }) => {
    state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
  },

  editAssignment: (state, { payload: assignmentId }) => {
    state.assignments = state.assignments.map((a: any) =>
    a._id === assignmentId ? { ...a, editing: true } : a
  ) as any; 
},
  setAssignment: (state, action) => {
      state.assignments = action.payload;
    },
}});

export const { addAssignment, updateAssignment, deleteAssignment, editAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
  



// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (
//       state,
//       { payload }: PayloadAction<Partial<Assignment> & { course: string }>
//     ) => {
//       const newAssignment: Assignment = {
//         _id: payload._id ?? nanoid(),
//         course: String(payload.course),
//         title: String(payload.title ?? payload['name'] ?? "(Untitled)"),
//         points: Number(payload.points ?? 100),
//         dueDate: payload.dueDate,
//         availableFrom: payload.availableFrom,
//         until: payload.until,
//       };
//       state.assignments.push(newAssignment);
//     },

//     // partial merge update to avoid wiping fields not included by the editor
//     updateAssignment: (
//       state,
//       { payload }: PayloadAction<{ _id: string; changes: Partial<Assignment> }>
//     ) => {
//       state.assignments = state.assignments.map((a) =>
//         a._id === payload._id
//           ? {
//               ...a,
//               ...payload.changes,
//               title:
//                 payload.changes.title !== undefined
//                   ? String(payload.changes.title)
//                   : a.title,
//               points:
//                 payload.changes.points !== undefined
//                   ? Number(payload.changes.points)
//                   : a.points,
//               course:
//                 payload.changes.course !== undefined
//                   ? String(payload.changes.course)
//                   : a.course,
//             }
//           : a
//       );
//     },

//     deleteAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
//       state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
//     },

//     editAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
//       state.assignments = state.assignments.map((a) =>
//         a._id === assignmentId ? { ...a, editing: true } : a
//       );
//     },
//   },
// });

// export const { addAssignment, updateAssignment, deleteAssignment, editAssignment } =
//   assignmentsSlice.actions;

// export default assignmentsSlice.reducer;


















// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment: any = {
//         _id: uuidv4(),
//         name: assignment.name,
//         course: assignment.course,
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignment._id ? assignment : a
//       ) as any;
//     },
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignmentId ? { ...a, editing: true } : a
//       ) as any;
//     },
//   },
// });
// export const {
//   addAssignment,
//   deleteAssignment,
//   updateAssignment,
//   editAssignment,
// } = assignmentsSlice.actions;

// export default assignmentsSlice.reducer;