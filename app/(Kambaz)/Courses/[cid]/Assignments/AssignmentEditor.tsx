/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Button, FormControl, Form, Row, Col } from "react-bootstrap";
import React from "react";

// Define the required props for the modal wrapper
type AssignmentModalProps = {
    show: boolean; // Controls modal visibility
    handleClose: () => void; // Function to hide the modal (used by Cancel/X)
    dialogTitle: string;

    // State for the assignment being edited/created
    assignment: any;
    setAssignment: (assignment: any) => void;

    // Function to dispatch save/add action
    addAssignment: () => void;
};

export default function AssignmentEditor({
    show,
    handleClose,
    dialogTitle,
    assignment,
    setAssignment,
    addAssignment,
}: AssignmentModalProps) {

    // Helper function to update any field in the assignment object
    const updateField = (field: string, value: any) => {
        setAssignment({ ...assignment, [field]: value });
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                {/* 1. Assignment Name */}
                <Form.Group controlId="assignmentName" className="mb-3">
                    <Form.Label>Assignment Name</Form.Label>
                    <FormControl
                        value={assignment.name || "New Assignment"}
                        onChange={(e) => updateField('name', e.target.value)}
                    />
                </Form.Group>

                {/* 2. Assignment Description */}
                <Form.Group controlId="assignmentDescription" className="mb-3">
                    <Form.Label>New Assignment Description</Form.Label>
                    <FormControl
                        as="textarea"
                        rows={3}
                        value={assignment.description || ""}
                        onChange={(e) => updateField('description', e.target.value)}
                    />
                </Form.Group>

                {/* 3. Points and 4. Assign Sections (Combined for vertical alignment) */}

                {/* ✅ FIX: Single Outer Row: Pushes the narrow content column (Col) to the right */}
                <Row className="mb-4 justify-content-end">

                    {/* ✅ FIX: Single Outer Column: Constrains the width for ALL following content */}
                    {/* Setting md={6} or a similar width makes the section look compact */}
                    <Col sm={9} md={6}>

                        {/* POINTS FIELD */}
                        {/* This row aligns the 'Points' label (sm=4) next to the input (sm=8) */}
                        <Form.Group as={Row} className="mb-4" controlId="assignmentPoints">
                            {/* ✅ FIX: Use text-end for the label */}
                            <Form.Label column sm={4} className="text-end">Points</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="number"
                                    value={assignment.points || 100}
                                    onChange={(e) => updateField('points', parseInt(e.target.value) || 0)}
                                />
                            </Col>
                        </Form.Group>

                        {/* ASSIGN SECTION (Sits immediately below Points, sharing the same outer column) */}

                        {/* This Row aligns the 'Assign' label (sm=4) next to the date box (sm=8) */}
                        <Row className="mb-3">

                            <Col sm={4} className="text-end pe-0 pt-2">
                                <Form.Label className="text-end">Assign</Form.Label>
                            </Col>

                            {/* 2. Assignment Dates Box (The Content) */}
                            <Col sm={8}>
                                <div className="border p-3"> {/* Keep the inner border for the box */}

                                    {/* Due Date (Full width within the Col) */}
                                    <Form.Group controlId="dueDate" className="mb-3">
                                        <Form.Label>Due</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={assignment.dueDate || ""}
                                            onChange={(e) => updateField('dueDate', e.target.value)}
                                        />
                                    </Form.Group>

                                    {/* Available From and Until: Side-by-Side */}
                                    <Row>
                                        <Col className="p-0 pe-2">
                                            <Form.Label>Available from</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={assignment.availableFrom || ""}
                                                onChange={(e) => updateField('availableFrom', e.target.value)}
                                            />
                                        </Col>
                                        <Col className="p-0 ps-2">
                                            <Form.Label>Until</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={assignment.availableUntil || ""}
                                                onChange={(e) => updateField('availableUntil', e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>

                    </Col> {/* Closes Col sm={9} md={6} */}
                </Row> {/* Closes Row className="mb-4 justify-content-end" */}

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        addAssignment();
                        handleClose(); // Close the modal after saving
                    }}
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}