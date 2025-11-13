"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithObjectsAsynchronously() {
    const [assignment, setAssignment] = useState<any>({});
    // using const assignment twice because the two variables 
    //with the same name exist in completely different scopes
    const fetchAssignment = async () => {
        const assignment = await client.fetchAssignment();
        setAssignment(assignment);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);
    const updateTitle = async (title: string) => {
        const updatedAssignment = await client.updateTitle(title);
        setAssignment(updatedAssignment);
    };

    return (
        <div id="wd-asynchronous-objects">
            <h3>Working with Objects Asynchronously</h3>
            <h4>Assignment</h4>
            <input className="form-control"
                defaultValue={assignment.title}
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })} />
            <textarea className="form-control"
                defaultValue={assignment.description}
                onChange={(e) => setAssignment({
                    ...assignment,
                    description: e.target.value
                })} />
            <input
                className="form-control"
                type="date" defaultValue={assignment.due}
                onChange={(e) => setAssignment({
                    ...assignment,
                    due: e.target.value
                })} />
            <div>
                <input type="checkbox" defaultChecked={
                    assignment.completed} onChange={(e) =>
                        setAssignment({
                            ...assignment,
                            completed: e.target.checked
                        })} />
                <label htmlFor="wd-completed">
                    Completed </label>
            </div>
            <button className="btn btn-primary me-2" onClick={() => updateTitle(assignment.title)} >
                Update Title
            </button>

            <pre>{JSON.stringify(assignment, null, 2)}</pre>
        </div>
    );
}

