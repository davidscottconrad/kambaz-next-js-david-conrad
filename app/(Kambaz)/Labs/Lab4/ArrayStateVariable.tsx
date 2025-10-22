import { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
export default function ArrayStateVariable() {
    const { todos } = useSelector((state: { todosReducer: { todos: Array<{ id: number; title: string }> } }) => state.todosReducer);
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <ListGroup>
                {todos.map((todo: { id: number; title: string }) => (
                    <ListGroupItem key={todo.id}>
                        {todo.title}
                    </ListGroupItem>
                ))}
            </ListGroup>
            <hr />
        </div>
    );
}