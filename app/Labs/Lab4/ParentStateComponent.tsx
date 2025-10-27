"use client"
import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

//Sharing State Between Components
//The parent is not changing the state, it's the child
export default function ParentStateComponent() {
    const [counter, setCounter] = useState(123);
    return (
        <div>
            <h2>Counter {counter}</h2>
            <ChildStateComponent counter={counter} setCounter={setCounter} />
            <hr />
        </div>
    );
}