"use client"
export default function ChildStateComponent(
    //childStateComponent doesn't have state variables, but just the reference
    { counter, setCounter }: //referece to the varibale
        { counter: number; setCounter: (counter: number) => void; }) //reference to the mutator
{
    return (
        <div id="wd-child-state">
            <h3>Counter {counter}</h3>
            <button onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click">
                Increment</button>
            <button onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click">
                Decrement</button>
            <hr />
        </div>
    );
} 