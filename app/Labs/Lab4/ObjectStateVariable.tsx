"use client"
import { useState } from "react";
import { FormControl } from "react-bootstrap";
export default function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 });
    return (
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            {/* spread previous object values, overide object property with e.target.value*/}
            <FormControl
                defaultValue={person.name}
                onChange={(e) => setPerson({ ...person, name: e.target.value })}
            />
            <FormControl
                defaultValue={person.age}
                onChange={(e) => setPerson({
                    ...person,
                    age: parseInt(e.target.value)
                })}
            />
            <hr />
        </div>
    );
    // ...person: copy the whole person obj but overriding only 1 attribute
    //so we only need 1 setter to mutate different attribute
}