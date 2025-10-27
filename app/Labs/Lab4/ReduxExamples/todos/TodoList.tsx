"use client"

import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux";
import { Todo } from "./TodoItem";
export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ListGroup>
                {todos.map((todo: Todo) => (
                    <TodoItem key={todo.id}
                        todo={todo} />))}
            </ListGroup>
            <hr />
        </div>
    );
}