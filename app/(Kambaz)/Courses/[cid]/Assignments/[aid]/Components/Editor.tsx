'use client';

import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import * as db from "../../../../../Database";

export default function Editor() {
    const { cid, aid } = useParams();
    console.log('cid, aid', cid, aid);
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
    console.log('assignment', assignment);

    return (
        <div id="wd-assignments-editor">
            <h2>Assignment Editor</h2>

            <Form>
                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Label htmlFor="wd-name">
                            Name
                        </Form.Label>
                        <Form.Control id="wd-name" type="text" value={assignment ? assignment.name : ''} />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Label htmlFor="wd-description">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="wd-description"
                            rows={4}
                            value={assignment ? assignment.description : ''}
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control id="wd-points" type="number" value={assignment ? assignment.points : 100} />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Assignment Group</Form.Label>
                    <Col sm={10}>
                        <Form.Select id="wd-group-name">
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
                            value={assignment?.displayGradeAs || "percentage"}
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
                            value={assignment?.submissionType || "online"}
                        >
                            <option value="online">Online</option>
                            <option value="in-person">In Person</option>
                        </Form.Select>

                        <Form.Label className="fw-bold mb-2">Online Entry Options</Form.Label>
                        <Form.Check
                            type="checkbox"
                            id="wd-text-entry"
                            label="Text Entry"
                            checked={assignment?.onlineEntryOptions?.includes("Text Entry") || false}
                            readOnly
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-website-url"
                            label="Website URL"
                            checked={assignment?.onlineEntryOptions?.includes("Website URL") || false}
                            readOnly
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-media-recordings"
                            label="Media Recordings"
                            checked={assignment?.onlineEntryOptions?.includes("Media Recordings") || false}
                            readOnly
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-student-annotation"
                            label="Student Annotation"
                            checked={assignment?.onlineEntryOptions?.includes("Student Annotation") || false}
                            readOnly
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-file-upload"
                            label="File Upload"
                            checked={assignment?.onlineEntryOptions?.includes("File Upload") || false}
                            readOnly
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Assign</Form.Label>
                    <Col sm={10}>
                        <Form.Label>Assign to</Form.Label>
                        <Form.Control
                            id="wd-assign-to"
                            type="text"
                            value={assignment?.assignTo || "Everyone"}
                            readOnly
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Due</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            id="wd-due-date"
                            type="date"
                            value={assignment?.due || ""}
                            readOnly
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Available From</Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            id="wd-available-from"
                            type="date"
                            value={assignment?.available || ""}
                            readOnly
                        />
                    </Col>
                    <Form.Label column sm={1}>Until</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            id="wd-available-until"
                            type="date"
                            value={assignment?.availableUntil || ""}
                            readOnly
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