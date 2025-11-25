/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = { users: [],};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, { payload: user }) => {
      const newUser: any = {
        _id: uuidv4(),
        lessons: [],
        name: user.name,
        course: user.course,
      };
      state.users = [...state.users, newUser] as any;
    },
  },
});
export const { addUser, setUsers } =
  usersSlice.actions;
export default usersSlice.reducer;