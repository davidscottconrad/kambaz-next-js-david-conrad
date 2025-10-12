'use client';

import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import * as db from "../../../../../Database";
import { useState } from "react";

export default function Editor() {
    const { cid, aid } = useParams();
    interface Assignments {
        _id: string;
        name: string;
        course: string;
        points?: number;
        due?: string;
        available?: string;
        availableUntil?: string;
        module?: string[];
        description?: string;
        displayGradeAs?: string;
        submissionType?: string;
        onlineEntryOptions?: string[];
        assignTo?: string;
    }

    const assignments: Assignments[] = db.assignments as unknown as Assignments[];
    const assignment = assignments.find(a => a._id === aid);

    const [assignmentState, setAssignmentState] = useState<Assignments | undefined>(assignment);

    return (
        <div id="wd-assignments-editor">
            <h2>Assignment Editor</h2>

            <Form>
                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Label htmlFor="wd-name">Name</Form.Label>
                        <Form.Control
                            id="wd-name"
                            type="text"
                            value={assignmentState?.name || ''}
                            onChange={e => setAssignmentState({ ...assignmentState!, name: e.target.value })}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Label htmlFor="wd-description">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="wd-description"
                            rows={4}
                            value={assignmentState?.description || ''}
                            onChange={e => setAssignmentState({ ...assignmentState!, description: e.target.value })}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            id="wd-points"
                            type="number"
                            value={assignmentState?.points ?? 100}
                            onChange={e => setAssignmentState({ ...assignmentState!, points: Number(e.target.value) })}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Assignment Group</Form.Label>
                    <Col sm={10}>
                        <Form.Select
                            id="wd-group-name"
                            value={assignmentState?.module?.[0] || "Assignments"}
                            onChange={e => setAssignmentState({ ...assignmentState!, module: [e.target.value] })}
                        >
                            <option value="Assignments">Assignments</option>
                            <option value="quizzes">Quizzes</option>
                            <option value="Exams">Exams</option>
                            <option value="Project">Projects</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Display Grade as</Form.Label>
                    <Col sm={10}>
                        <Form.Select
                            id="wd-display-grade-as"
                            value={assignmentState?.displayGradeAs || "percentage"}
                            onChange={e => setAssignmentState({ ...assignmentState!, displayGradeAs: e.target.value })}
                        >
                            <option value="percentage">Percentage</option>
                            <option value="points">Points</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Submission Type</Form.Label>
                    <Col sm={10}>
                        <Form.Select
                            id="wd-submission-type"
                            className="mb-3"
                            value={assignmentState?.submissionType || "online"}
                            onChange={e => setAssignmentState({ ...assignmentState!, submissionType: e.target.value })}
                        >
                            <option value="online">Online</option>
                            <option value="in-person">In Person</option>
                        </Form.Select>

                        <Form.Label className="fw-bold mb-2">Online Entry Options</Form.Label>
                        {["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Upload"].map(option => (
                            <Form.Check
                                key={option}
                                type="checkbox"
                                id={`wd-${option.toLowerCase().replace(/ /g, "-")}`}
                                label={option}
                                checked={assignmentState?.onlineEntryOptions?.includes(option) || false}
                                onChange={e => {
                                    const options = assignmentState?.onlineEntryOptions || [];
                                    setAssignmentState({
                                        ...assignmentState!,
                                        onlineEntryOptions: e.target.checked
                                            ? [...options, option]
                                            : options.filter(o => o !== option)
                                    });
                                }}
                            />
                        ))}
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Assign</Form.Label>
                    <Col sm={10}>
                        <Form.Label>Assign to</Form.Label>
                        <Form.Control
                            id="wd-assign-to"
                            type="text"
                            value={assignmentState?.assignTo || "Everyone"}
                            onChange={e => setAssignmentState({ ...assignmentState!, assignTo: e.target.value })}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Due</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            id="wd-due-date"
                            type="date"
                            value={assignmentState?.due || ""}
                            onChange={e => setAssignmentState({ ...assignmentState!, due: e.target.value })}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Available From</Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            id="wd-available-from"
                            type="date"
                            value={assignmentState?.available || ""}
                            onChange={e => setAssignmentState({ ...assignmentState!, available: e.target.value })}
                        />
                    </Col>
                    <Form.Label column sm={1}>Until</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            id="wd-available-until"
                            type="date"
                            value={assignmentState?.availableUntil || ""}
                            onChange={e => setAssignmentState({ ...assignmentState!, availableUntil: e.target.value })}
                        />
                    </Col>
                </Row>

                <div className="d-flex justify-content-end gap-2">
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </div>
    );
}