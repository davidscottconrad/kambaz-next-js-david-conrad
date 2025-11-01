"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { RootState } from "../../../store";
export default function AddRedux() {
    //most fundamental and widely used Hooks in React. 
    //It allows functional components to manage state—data that c
    //hanges over time and affects what is rendered on the screen
    //In short, remember things and update the UI when those "things" change

    // const a and b can only be seen in the AddRedux function
    // while sum can be seen anywhere under "Provider"
    //现实中经常 combinelocal & global state 一起
    const [a, setA] = useState(12); //local component state
    const [b, setB] = useState(23);
    const { sum } = useSelector((state: RootState) => state.addReducer); //global application state
    const dispatch = useDispatch();
    return (
        <div className="w-25" id="wd-add-redux">
            <h1>Add Redux</h1>
            <h2>{a} + {b} = {sum}</h2>
            <FormControl type="number" defaultValue={a}
                onChange={(e) => setA(parseInt(e.target.value))} />
            <FormControl type="number" defaultValue={b}
                onChange={(e) => setB(parseInt(e.target.value))} />
            <Button id="wd-add-redux-click"
                onClick={() => dispatch(add({ a, b }))}> {/*This is the payload */}
                Add Redux
            </Button>
            <hr />
        </div>
    );
}