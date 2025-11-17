"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { FaPlus, FaClipboardCheck } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import InputGroupText from "react-bootstrap/InputGroupText";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment as deleteAssignmentAction, setAssignments } from "./reducer";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as client from "../../client";

// Add types for assignments and Redux state
type Assignment = {
    _id: string;
    course: string;
    name: string;
    available?: string;
    due?: string;
    points?: number;
};

interface RootState {
    assignments: {
        assignments: Assignment[];
    };
}

export default function Modules() {
    const { cid } = useParams<{ cid: string }>();
    const router = useRouter();
    const dispatch = useDispatch();
    const assignments = useSelector((state: RootState) => state.assignments.assignments);

    // Fetch assignments when component mounts
    const fetchAssignments = async () => {
        const fetchedAssignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(fetchedAssignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    // Delete assignment using API
    const deleteAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
    };

    const handleEditModule = (assignmentId: string) => {
        router.push(`/Courses/${cid}/Assignments/${assignmentId}/Editor`);
    };

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
                    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={() => {
                        router.push(`/Courses/${cid}/Assignments/new/Editor`);
                    }}>
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
                        <div className="d-flex flex-row ">
                            <div className="mx-2 border rounded px-2 border-dark">40% of Total</div>
                        </div>
                    </div>

                    <ListGroup className="wd-lessons rounded-0 d-flex" style={{ minHeight: "80px", borderLeft: "6px solid green" }}>
                        {assignments.map((assignment: Assignment, idx: number) => {
                            return (
                                <ListGroupItem key={idx} className="wd-lesson p-2 d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-4" size={35} /> <FaClipboardCheck size={40} color="green"></FaClipboardCheck>
                                    <div className="p-2">
                                        <div><Link href={`/Courses/${cid}/Assignments/${assignment._id}/Editor`} className="text-decoration-none text-black fs-4">{assignment.name}</Link></div>
                                        <div className="fs-6">
                                            <span className="text-danger">Multiple Modules</span> | <span className="fw-bold">Not Available until</span> {assignment.available} | Due {assignment.due} | {assignment.points}pts
                                        </div>
                                    </div>
                                    <AssignmentControlButtons
                                        assignmentId={assignment._id}
                                        editAssignment={handleEditModule}
                                        deleteAssignment={deleteAssignment}
                                    />
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

