"use client"
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux"
import AddRedux from "./AddRedux"
import TodoList from "./todos/TodoList"
import { RootState } from "../store";
export default function ReduxExamples() {
    return (
        <div>
            <h2>Redux Examples</h2>
            <HelloRedux />
            <CounterRedux />
            <AddRedux />
            <TodoList />
        </div>
    );
};