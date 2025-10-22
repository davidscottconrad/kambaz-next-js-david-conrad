
import { ListGroup } from "react-bootstrap";
import "./styles.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const { todos } = useSelector((state: { todosReducer: { todos: Array<{ id: number; title: string }> } }) => state.todosReducer || {});
    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List sad</h2>
            <ListGroup>
                <TodoForm />
                {todos && todos.map((todo: { id: number; title: string }) => (
                    <TodoItem todo={{ ...todo, id: String(todo.id) }} key={todo.id} />
                ))}
            </ListGroup>
            <hr />
        </div>);
}