import { Form, Row, Col, Button } from "react-bootstrap";

export default function Editor() {
    return (
        <div id="wd-assignments-editor">
            <h2>Assignment Editor</h2>

            <Form>
                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                        <Form.Control id="wd-name" type="text" />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Label htmlFor="wd-description">Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="wd-description"
                            rows={4}
                            defaultValue="The assignment is available online. Submit a link to the landing page of"
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Points</Form.Label>
                    <Col sm={10}>
                        <Form.Control id="wd-points" type="number" defaultValue="100" />
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
                        <Form.Select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                            <option value="points">Points</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Submission Type</Form.Label>
                    <Col sm={10}>
                        <Form.Select id="wd-submission-type" className="mb-3">
                            <option value="online">Online</option>
                            <option value="in-person">In Person</option>
                        </Form.Select>

                        <Form.Label className="fw-bold mb-2">Online Entry Options</Form.Label>
                        <Form.Check
                            type="checkbox"
                            id="wd-text-entry"
                            label="Text Entry"
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-website-url"
                            label="Website URL"
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-media-recordings"
                            label="Media Recordings"
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-student-annotation"
                            label="Student Annotation"
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-file-upload"
                            label="File Upload"
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Assign</Form.Label>
                    <Col sm={10}>
                        <Form.Label>Assign to</Form.Label>
                        <Form.Control id="wd-assign-to" type="text" defaultValue="Everyone" />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Due</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            id="wd-due-date"
                            type="date"
                            defaultValue="2000-01-01"
                        />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm={2}>Available From</Form.Label>
                    <Col sm={5}>
                        <Form.Control
                            id="wd-available-from"
                            type="date"
                            defaultValue="2000-01-01"
                        />
                    </Col>
                    <Form.Label column sm={1}>Until</Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            id="wd-available-until"
                            type="date"
                            defaultValue="2000-01-01"
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