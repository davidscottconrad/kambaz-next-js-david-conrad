import { ListGroupItem, Button } from "react-bootstrap";
import "./styles.css";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo = { id: "", title: "" } }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <ListGroupItem className="todo-list-group-item">
            <div className="todo-title">{todo.title}</div>
            <div className="todo-buttons-div">
                <Button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">Delete</Button>
                <Button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">Edit</Button>
            </div>
        </ListGroupItem>
    );
}