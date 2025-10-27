"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"; //use selector to read and write to the reducer
import { addTodo, updateTodo, setTodo } from "./todosReducer"; //use reducer functions to mutate state
import { Todo } from "./TodoItem";
export default function TodoForm() { //remove dependencies and use reducer functions instead
    const todo = useSelector((state: any) => state.todosReducer.todo) as Todo;
    const dispatch = useDispatch();


    return (<>
        <Button variant="primary"
            className="mb-2 w-25 float-end"
            onClick={() => dispatch(addTodo(todo))}>
            Add </Button>
        <Button variant="success"
            className="mb-2 w-25 float-end"
            onClick={() => dispatch(updateTodo(todo))}>
            Update </Button>
        <input value={todo.title}
            className="form-control mb-2 w-50"
            onChange={(e) => dispatch(setTodo({
                ...todo, title: e.target.value
            }))} />
    </>);
}
