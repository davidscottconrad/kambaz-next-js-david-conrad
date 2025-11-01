import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../ReduxExamples/AddRedux/addReducer";
import todosReducer from "../ReduxExamples/todos/todosReducer";

//State Transformer: A reducer is the only way to change the state in a Redux application. 
//It acts as a translator, reading an intent (the action) and executing the corresponding state update.


//Store collects all the slices into one big object. Equivelant to DB
//reducers retrieve and update state

//adding the helloReducer to the store
const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todosReducer,
 }});
export default store;

