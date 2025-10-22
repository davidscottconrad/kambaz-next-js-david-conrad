import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: { todosReducer: { todo: { title: string } } }) => state.todosReducer || {});
    const dispatch = useDispatch();
    return (

        <ListGroupItem className="todo-list-group-item">
            <FormControl value={todo?.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
            <Button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </Button>
            <Button onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"> Update </Button>
        </ListGroupItem>
    );
}
