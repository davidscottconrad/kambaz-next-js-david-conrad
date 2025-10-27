import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sum: 0,
};
const addSlice = createSlice({
    name: "add",
    initialState,
    //action contains the argument of the dispatched function
    //payload: an obj that collects all the arguments

    //When you dispatch the add action (e.g., dispatch(add({ a: 12, b: 23 }))), 
    //Redux packages the object { a: 12, b: 23 } into the action.payload.
    //The reducer uses the action parameter to access this payload and perform the calculation.
    //If you removed the action parameter, the function wouldn't know which numbers to add.

    //payload contains all the parameters that passes by the reducer function
    reducers: {
        add: (state, action) => {
            state.sum = action.payload.a + action.payload.b;
        },
    },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;