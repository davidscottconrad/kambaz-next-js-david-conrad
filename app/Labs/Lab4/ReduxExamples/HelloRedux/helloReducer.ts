import { createSlice } from "@reduxjs/toolkit";
//creare state slice and reducer to retrieve and update the state slice

const initialState = {  //create reducer
  message: "Hello World",
};
const helloSlice = createSlice({ //create slice
  name: "hello",
  initialState,
  reducers: {}, //all the setters
});
export default helloSlice.reducer;