"use client";
import HelloRedux from "./HelloRedux/index";
import CounterRedux from "./CounterRedux/index";
import AddRedux from "./AddRedux/index";
import TodoList from "./todos/TodoList";

// why are we using page here instead of just importing from a component?
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
