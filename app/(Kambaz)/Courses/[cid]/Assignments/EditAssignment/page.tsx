// 'use client';

// import { useState } from 'react';
// import { Form, FormGroup, FormLabel, FormControl, FormSelect, Row, Col, Card, Button, InputGroup, Badge, } from 'react-bootstrap';
// import { BsCalendarEvent } from 'react-icons/bs';
// import styles from "../[aid]/MyForm.module.css";

// export default function EditAssignment() {

//     return (
//         <div className="p-4" style={{ maxWidth: 840, margin: '0 auto' }}>
//             <Form>

//                 {/* Assignment Name */}
//                 <FormGroup className="mb-3" controlId="assignmentName">
//                     <FormLabel className="fw-semibold">Assignment Name</FormLabel>
//                     <FormControl size="lg" type="text" defaultValue="A1" />
//                 </FormGroup>

//                 {/* Description (editable textarea to approximate the rich editor) */}
//                 <FormGroup className="mb-4" controlId="assignmentDescription">
//                     <FormControl as="textarea" rows={8} className="p-3" placeholder="Describe the assignment requirements here..."
//                         defaultValue={
//                             `The assignment is available online.

// Submit a link to the landing page of your Web application.

// The landing page should include:
// • Your full name and section
// • Links to each lab assignment
// • Link to the Kanbas application
// • Links to source code repositories`
//                         }
//                     />
//                 </FormGroup>

//                 {/* Points / Group / Display grade as */}


//                 <FormGroup as={Row} className="mb-3" controlId="points">
//                     <FormLabel column className="fw-semibold text-md-end">Points</FormLabel>
//                     <Col md={6}>
//                         <FormControl type="number" defaultValue={100} />
//                     </Col>
//                 </FormGroup>


//                 <Form.Group as={Row} className="mb-3 " controlId="group">
//                     <Form.Label column className="fw-semibold text-md-end">Assignment Group</Form.Label>
//                     <Col md={6}>
//                         <Form.Select defaultValue="ASSIGNMENTS">
//                             <option>ASSIGNMENTS</option>
//                             <option>QUIZZES</option>
//                             <option>EXAMS</option>
//                             <option>PROJECTS</option>
//                         </Form.Select>
//                     </Col>
//                 </Form.Group>


//                 <FormGroup as={Row} className="mb-3" controlId="displayGradeAs">
//                     <FormLabel column className="fw-semibold text-md-end">Display Grade as</FormLabel>
//                     <Col md={6}>
//                         <FormSelect defaultValue="Percentage">
//                             <option>Percentage</option>
//                             <option>Points</option>
//                             <option>Complete/Incomplete</option>
//                         </FormSelect>
//                     </Col>
//                 </FormGroup>



//                 {/* Submission Type */}
//                 <FormGroup as={Row} className="mb-3" controlId="submissionType">
//                     <FormLabel column className="fw-semibold text-md-end">Submission Type</FormLabel>
//                     <Col md={6}>
//                         <Card className="h-100">
//                             <Card.Body>
//                                 <Form.Select id="submissionType" defaultValue="Online" style={{ minWidth: 220 }}>
//                                     <option>Online</option>
//                                     <option>On Paper</option>
//                                     <option>No Submission</option>
//                                 </Form.Select>
//                                 <div className="fw-semibold mb-3 mt-3">Online Entry Options</div>
//                                 <Form.Check className="mb-2" type="checkbox" label="Text Entry" />
//                                 <Form.Check className="mb-2" type="checkbox" label="Website URL" defaultChecked />
//                                 <Form.Check className="mb-2" type="checkbox" label="Media Recordings" />
//                                 <Form.Check className="mb-2" type="checkbox" label="Student Annotation" />
//                                 <Form.Check className="mb-0" type="checkbox" label="File Uploads" />
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </FormGroup>




//                 {/* Assign section */}
//                 <FormGroup as={Row} className="mb-3" controlId="assign">
//                     <FormLabel column className="fw-semibold text-md-end">Assign</FormLabel>
//                     <Col md={6}>
//                         <Card className="h-100">
//                             <Card.Body>
//                                 <Form.Group className="mb-3" controlId="assignTo">
//                                     <Form.Label className="fw-semibold">Assign to</Form.Label>
//                                     <FormControl placeholder='Everyone' />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId="due">
//                                     <Form.Label className="fw-semibold">Due</Form.Label>
//                                     <div id="wd-css-styling-due-date">
//                                         <InputGroup className="mb-3">
//                                             <FormControl className={styles.noNativeIcon} type="date"
//                                                 value="2024-05-13" />
//                                             <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
//                                         </InputGroup>
//                                     </div>
//                                 </Form.Group>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </FormGroup>



//                 {/* Actions */}
//                 <div className="d-flex justify-content-end gap-2">
//                     <Button variant="light">Cancel</Button>
//                     <Button variant="danger">Save</Button>
//                 </div>
//             </Form>
//         </div >
//     );
// }
