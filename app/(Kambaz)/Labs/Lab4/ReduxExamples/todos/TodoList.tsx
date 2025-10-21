import { useState } from "react";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";

type Todo = { id: string; title: string };

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node" },
    ]);
    const [todo, setTodo] = useState<Todo>({ id: "-1", title: "Learn Mongo" });

    const addTodo = (todo: Todo) => {
        const newTodos = [
            ...todos,
            {
                ...todo,
                id: new Date().getTime().toString(),
            },
        ];
        setTodos(newTodos);
        setTodo({ id: "-1", title: "" });
    };

    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((t) => t.id !== id);
        setTodos(newTodos);
    };

    const updateTodo = (todo: Todo) => {
        const newTodos = todos.map((item) => (item.id === todo.id ? todo : item));
        setTodos(newTodos);
        setTodo({ id: "-1", title: "" });
    };

    return (
        <div>
            <h2>Todo List</h2>

            <ListGroup>
                <ListGroupItem>
                    <Button onClick={() => addTodo(todo)} id="wd-add-todo-click">
                        Add
                    </Button>{" "}
                    <Button onClick={() => updateTodo(todo)} id="wd-update-todo-click">
                        Update
                    </Button>
                    <FormControl
                        value={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                        placeholder="Todo title"
                        className="mt-2"
                    />
                </ListGroupItem>

                {todos.map((t) => (
                    <ListGroupItem key={t.id}>
                        <Button onClick={() => deleteTodo(t.id)} id="wd-delete-todo-click">
                            Delete
                        </Button>{" "}
                        <Button onClick={() => setTodo(t)} id="wd-set-todo-click">
                            Edit
                        </Button>
                        {" "}{t.title}
                    </ListGroupItem>
                ))}
            </ListGroup>

            <hr />
        </div>
    );
}