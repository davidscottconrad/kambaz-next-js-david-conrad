"use client";

import Link from "next/link";


import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { Button } from "react-bootstrap";
import { FaPlus, FaClipboardCheck } from "react-icons/fa6";

import { FaMagnifyingGlass } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import InputGroupText from "react-bootstrap/InputGroupText";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
export default function Modules() {

    const { cid } = useParams();
    interface Assignments {
        _id: string;
        name: string;
        course: string;
        points?: number;
        due?: string;
        available?: string;
        module?: string[];
    }

    const assignments: Assignments[] = db.assignments as unknown as Assignments[];

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <InputGroup style={{ maxWidth: 420 }} className="p-3">
                    <InputGroupText>
                        <FaMagnifyingGlass />
                    </InputGroupText>
                    <Form.Control
                        type="search"
                        placeholder="Search for Assignment"
                        aria-label="Search for Assignment"
                    />
                </InputGroup>
                <div>
                    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </Button>
                    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </Button>
                </div>
            </div>
            <br /><br /><br /><br />
            <ListGroup className="rounded-0 m-3" id="wd-modules">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between flex-row">
                        <div>
                            <BsGripVertical className="me-2 fs-3" /> Assignments
                        </div>
                        <div className="d-flex flex-row "><div className="mx-2 border rounded px-2 border-dark">40% of Total</div>
                            <ModuleControlButtons /></div>
                    </div>

                    <ListGroup className="wd-lessons rounded-0 d-flex" style={{ minHeight: "80px", borderLeft: "6px solid green" }}>
                        {assignments
                            .filter((assignment) => assignment.course === cid)
                            .map((assignment, idx) => {
                                return (

                                    <ListGroupItem key={idx} className="wd-lesson p-2 d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-4" size={35} /> <FaClipboardCheck size={40} color="green"></FaClipboardCheck>
                                        <div className="p-2">
                                            <div><Link href="/Courses/1234/Assignments/125/Editor" className="text-decoration-none text-black fs-4">{assignment.name}</Link></div>
                                            <div className="fs-6">
                                                <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until</span> {assignment.available} | Due {assignment.due} | {assignment.points}pts
                                            </div>
                                        </div>

                                        <AssignmentControls />

                                    </ListGroupItem>

                                )
                            })
                        }
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>


        </div>
    );
}

