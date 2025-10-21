import HelloRedux from "./HelloRedux/page";
import CounterRedux from "./CounterRedux/page";
import AddRedux from "./AddRedux/page";
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
