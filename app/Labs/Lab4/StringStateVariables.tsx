"use client";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
export default function StringStateVariables() {
    //declare and initialize state variable
    const [firstName, setFirstName] = useState("John");
    return (
        <div>
            <h2>String State Variables</h2>
            {/*  render string state variable*/}
            <p>{firstName}</p>
            <FormControl
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            {/* e.target → the DOM element that triggered the event (the input).
            firstName always has the lately value as we type
            initialize a text input field with the state variable
            update the state variable at each key stroke*/}
            <hr /></div>);
}