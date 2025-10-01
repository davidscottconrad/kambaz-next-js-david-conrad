import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "../Modules/ModulesControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { Button } from "react-bootstrap";
import { FaPlus, FaClipboardCheck } from "react-icons/fa6";
import { InputGroup, Form } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";

export default function Modules() {
    return (
        <div>

            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between flex-row">
                        <div>
                            <BsGripVertical className="me-2 fs-3" /> Assignments
                        </div>
                        <div className="d-flex flex-row "><div className="mx-2 border rounded px-2 border-dark">40% of Total</div>
                            <ModuleControlButtons /></div>
                    </div>
                    <ListGroup className="wd-lessons rounded-0 d-flex" style={{ minHeight: "80px" }}>
                        <ListGroupItem className="wd-lesson p-2 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-4" size={35} /> <FaClipboardCheck size={40} color="green"></FaClipboardCheck>
                            <div className="p-2">
                                <div>A1</div>
                                <div className="fs-6"><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until</span> May 6 at 12:00am | Due May 13 at 11:59pm | 100pts</div>
                            </div>

                            <AssignmentControls />

                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-2 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-4" size={35} /> <FaClipboardCheck size={40} color="green"></FaClipboardCheck>
                            <div className="p-2">
                                <div>A2</div>
                                <div className="fs-6"><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until</span> May 7 at 12:00am | Due May 16 at 11:59pm | 100pts</div>
                            </div>

                            <AssignmentControls />

                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-2 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-4" size={35} /> <FaClipboardCheck size={40} color="green"></FaClipboardCheck>
                            <div className="p-2">
                                <div>A3</div>
                                <div className="fs-6"><span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until</span> May 8 at 12:00am | Due May 18 at 11:59pm | 100pts</div>
                            </div>

                            <AssignmentControls />

                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>

            <div id="wd-assignments">
                <input placeholder="Search for Assignments"
                    id="wd-search-assignment" />
                <button id="wd-add-assignment-group">+ Group</button>
                <button id="wd-add-assignment">+ Assignment</button>
                <h3 id="wd-assignments-title">
                    ASSIGNMENTS 40% of Total <button>+</button> </h3>
                <ul id="wd-assignment-list">
                    <li id="wd-assignment-list-item">

                        <Link href="/Courses/1234/Assignments/123/Editor"
                            id="wd-assignment-link" >
                            A1 - ENV + HTML
                        </Link>
                        <p>
                            Multiple Modules | Not Available until May 6 at 12:00am
                            | Due May 13 at 11:59pm | 100pts
                        </p>
                    </li>
                    <li id="wd-assignment-list-item">
                        <Link href="/Courses/1234/Assignments/1234/Editor"
                            id="wd-assignment-link" >
                            A2 - CSS + Bootstrap
                        </Link>

                        <p>
                            Multiple Modules | Not Available until May 13 at 12:00am
                            | Due May 20 at 11:59pm | 100pts
                        </p>
                    </li>
                    <li id="wd-assignment-list-item">
                        <Link href="/Courses/1234/Assignments/1235/Editor"
                            id="wd-assignment-link" >
                            A3 - JS + React
                        </Link>
                        <p>
                            Multiple Modules | Not Available until May 20 at 12:00am
                            | Due May 27 at 11:59pm | 100pts
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
