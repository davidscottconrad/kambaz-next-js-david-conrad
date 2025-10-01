'use client';

import { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, FormSelect, Row, Col, Card, Button, InputGroup, Badge, } from 'react-bootstrap';
import { BsCalendarEvent } from 'react-icons/bs';

export default function EditAssignment() {

    return (
        <div className="p-4" style={{ maxWidth: 840, margin: '0 auto' }}>
            <Form>

                {/* Assignment Name */}
                <FormGroup className="mb-3" controlId="assignmentName">
                    <FormLabel className="fw-semibold">Assignment Name</FormLabel>
                    <FormControl size="lg" type="text" defaultValue="A1" />
                </FormGroup>

                {/* Description (editable textarea to approximate the rich editor) */}
                <FormGroup className="mb-4" controlId="assignmentDescription">
                    <FormControl as="textarea" rows={8} className="p-3" placeholder="Describe the assignment requirements here..."
                        defaultValue={
                            `The assignment is available online.

                            Submit a link to the landing page of your Web application.

                            The landing page should include:
                            • Your full name and section
                            • Links to each lab assignment
                            • Link to the Kanbas application
                            • Links to source code repositories`
                        }
                    />
                </FormGroup>

                {/* Points / Group / Display grade as */}


                <FormGroup as={Row} className="mb-3" controlId="points">
                    <FormLabel column className="fw-semibold">Points</FormLabel>
                    <Col md={4}>
                        <FormControl type="number" defaultValue={100} />
                    </Col>
                </FormGroup>


                <Form.Group as={Row} className="mb-3 " controlId="group">
                    <Form.Label column className="fw-semibold ">Assignment Group</Form.Label>
                    <Col md={4}>
                        <Form.Select defaultValue="ASSIGNMENTS">
                            <option>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECTS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>


                <FormGroup as={Row} className="mb-3" controlId="displayGradeAs">

                    <FormLabel column className="fw-semibold">Display Grade as</FormLabel>
                    <Col md={4}>
                        <FormSelect defaultValue="Percentage">
                            <option>Percentage</option>
                            <option>Points</option>
                            <option>Complete/Incomplete</option>
                        </FormSelect>
                    </Col>
                </FormGroup>



                {/* Submission Type */}



                <Form.Group as={Row} className="mb-3">
                    <Col xs="auto" className="ms-auto">
                        <div className="d-flex align-items-center flex-nowrap">
                            <Form.Label htmlFor="submissionType" className="fw-semibold  mb-0  me-3">
                                Submission Type
                            </Form.Label>
                            <Form.Select id="submissionType" defaultValue="Online" style={{ minWidth: 220 }}>
                                <option>Online</option>
                                <option>On Paper</option>
                                <option>No Submission</option>
                            </Form.Select>
                        </div>

                    </Col>
                </Form.Group>


                <Col md={6} lg={7} className="mt-3 mt-md-0">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="fw-semibold mb-2">Online Entry Options</div>
                            <Form.Check className="mb-2" type="checkbox" label="Text Entry" />
                            <Form.Check className="mb-2" type="checkbox" label="Website URL" defaultChecked />
                            <Form.Check className="mb-2" type="checkbox" label="Media Recordings" />
                            <Form.Check className="mb-2" type="checkbox" label="Student Annotation" />
                            <Form.Check className="mb-0" type="checkbox" label="File Uploads" />
                        </Card.Body>
                    </Card>
                </Col>


                {/* Assign section */}
                <Card className="mb-4">
                    <Card.Body>
                        <div className="fw-semibold mb-3">Assign</div>

                        <Form.Group className="mb-3" controlId="assignTo">
                            <Form.Label className="fw-semibold">Assign to</Form.Label>
                            <div className="form-control d-flex align-items-center gap-2">
                                <Badge bg="light" text="dark" className="px-2 py-1">Everyone</Badge>
                            </div>
                        </Form.Group>

                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Group controlId="dueDate">
                                    <Form.Label className="fw-semibold">Due</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="datetime-local"
                                            value="May 13, 2024, 11:59 PM"

                                        />
                                        <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="availableFrom">
                                    <Form.Label className="fw-semibold">Available from</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="datetime-local"
                                            value="May 6, 2024, 11:59 PM"

                                        />
                                        <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="until">
                                    <Form.Label className="fw-semibold">Until</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="datetime-local"
                                            value="May 13, 2024, 11:59 PM"

                                        />
                                        <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Actions */}
                <div className="d-flex justify-content-end gap-2">
                    <Button variant="light">Cancel</Button>
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </div >
    );
}
