import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;

    // Module state for editing on the server
    const [module, setModule] = useState({
        id: "CS101",
        name: "Introduction to Computer Science",
        description: "Fundamentals of programming and computer science",
        course: "Computer Science",
    });
    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <hr />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <hr />

            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}>
                Update Title
            </a>
            <FormControl
                className="w-75"
                id="wd-assignment-title"
                defaultValue={assignment.title}
                onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
            />
            <div className="clearfix" />
            <hr />

            {/* Module - Retrieve */}
            <h4>Module - Retrieve</h4>
            <div className="d-flex gap-2">
                <a id="wd-get-module" className="btn btn-secondary"
                    href={`${MODULE_API_URL}`}>
                    Get Module
                </a>
                <a id="wd-get-module-name" className="btn btn-secondary"
                    href={`${MODULE_API_URL}/name`}>
                    Get Module Name
                </a>
            </div>
            <hr />

            {/* Module - Edit Name */}
            <h4>Module - Edit Name</h4>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}>
                Update Module Name
            </a>
            <FormControl
                className="w-75"
                id="wd-module-name"
                defaultValue={module.name}
                onChange={(e) =>
                    setModule({ ...module, name: e.target.value })
                }
            />
            <div className="clearfix" />
            <hr />

            {/* Module - Edit Description */}
            <h4>Module - Edit Description</h4>
            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>
                Update Module Description
            </a>
            <FormControl
                as="textarea"
                rows={2}
                className="w-75"
                id="wd-module-description"
                defaultValue={module.description}
                onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                }
            />
            <div className="clearfix" />
            <hr />

            {/* Assignment - Edit Score */}
            <h4>Assignment - Edit Score</h4>
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${encodeURIComponent(String(assignment.score))}`}>
                Update Score
            </a>
            <FormControl
                type="number"
                className="w-25"
                id="wd-assignment-score"
                defaultValue={assignment.score}
                onChange={(e) => {
                    const value = e.target.value === "" ? 0 : Number(e.target.value);
                    setAssignment({ ...assignment, score: value });
                }}
            />
            <div className="clearfix" />
            <hr />

            {/* Assignment - Edit Completed */}
            <h4>Assignment - Edit Completed</h4>
            <a id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${encodeURIComponent(String(assignment.completed))}`}>
                Update Completed
            </a>
            <div className="form-check">
                <input
                    id="wd-assignment-completed"
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={assignment.completed}
                    onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked })
                    }
                />
                <label className="form-check-label" htmlFor="wd-assignment-completed">
                    Completed
                </label>
            </div>
            <div className="clearfix" />
            <hr />
        </div>
    );
}
