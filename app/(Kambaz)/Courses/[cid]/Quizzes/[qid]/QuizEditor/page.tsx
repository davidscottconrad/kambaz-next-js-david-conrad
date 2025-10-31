/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Form, Row, Col, Card, InputGroup } from "react-bootstrap";
import { BsCalendarEvent } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateQuiz, addQuiz, Quiz } from "../../reducer";


export default function QuizEditor() {

    const { cid, qid } = useParams() as { cid: string; qid: string };
    const router = useRouter();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((s: any) => s.quizReducer) as { quizzes: Quiz[] };

    const found = quizzes.find((a) => String(a.course) === String(cid) && a._id === qid);
    const isNew = !found || qid === "new";


    const today = new Date().toISOString().split("T")[0];

    const [title, setTitle] = useState(found?.title ?? "");
    const [type, setType] = useState(found?.type ?? "");
    const [timeLimit, setTimeLimit] = useState(found?.timeLimit ?? "");
    const [multipleAttempts, setMultipleAttempts] = useState(found?.multipleAttempts ?? "");
    const [assignmentGroup, setAssignmentGroup] = useState(found?.assignmentGroup ?? "");
    const [shuffleAnswer, setShuffleAnswer] = useState(found?.shuffleAnswer ?? "");

    const [showCorrectAnswers, setShowCorrectAnswers] = useState(found?.showCorrectAnswers ?? "");
    const [accessCode, setAccessCode] = useState(found?.accessCode ?? "");
    const [oneQuestionAtATime, setOneQuestionAtATime] = useState(found?.oneQuestionAtATime ?? "");
    const [webcamRequired, setWebcamRequired] = useState(found?.webcamRequired ?? "");
    const [lockQuestionAfterAsnwering, setLockQuestionAfterAsnwering] = useState(found?.lockQuestionAfterAsnwering ?? "");
    const [points, setPoints] = useState<number>(found?.points ?? 100);
    const [dueDate, setDueDate] = useState<string>(found?.dueDate ?? today);
    const [availableFrom, setAvailableFrom] = useState<string>(found?.availableFrom ?? today);
    const [until, setUntil] = useState<string>(found?.until ?? today);


    // If you want to prefill new with today values, uncomment:
    useEffect(() => {
        if (isNew) {
            setDueDate((v) => v || today);
            setAvailableFrom((v) => v || today);
        }
    }, [isNew, today]);

    const handleSave = () => {
        if (isNew) {
            dispatch(
                addQuiz({
                    course: cid,
                    title: title.trim() || "(Untitled)",
                    points,
                    dueDate: dueDate || undefined,
                    availableFrom: availableFrom || undefined,
                    until: until || undefined,
                })
            );
        } else {
            dispatch(
                updateQuiz({
                    _id: qid,
                    changes: {
                        course: cid,
                        title: title.trim() || "(Untitled)",
                        points,
                        dueDate: dueDate || undefined,
                        availableFrom: availableFrom || undefined,
                        until: until || undefined,
                    },
                })
            );
        }
        router.push(`/Courses/${cid}/Quizzes`);
    };

    return (
        <div className="p-4">
            {/* Quiz Type */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Quiz Type</Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="Quiz Type" onChange={(e) => setType(e.target.value)}>
                        <option>Quiz Type</option>
                        <option>Graded Quiz</option>
                        <option>Practice Quiz</option>
                        <option>Graded Survey</option>
                        <option>Ungraded Survey</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            {/* Points */}
            <Form.Group as={Row} className="mb-4">
                <Form.Label column sm={2}>Points</Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(parseInt(e.target.value || "0", 10))}
                    />
                </Col>
            </Form.Group>

            {/* Assignment Group */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Assignment Group</Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="Quizzes" onChange={(e) => setAssignmentGroup(e.target.value)}>
                        <option selected>Quizzes</option>
                        <option value="1">Exams</option>
                        <option value="2">Assignments</option>
                        <option value="3">Project</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            {/* Shuffle Answer */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Shuffle Answer</Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="Yes" onChange={(e) => setShuffleAnswer(e.target.value)}>
                        <option selected>Yes</option>
                        <option value="1">No</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            {/* Time Limit */}
            <Form.Group as={Row} className="mb-4">
                <Form.Label column sm={2}>Time Limit</Form.Label>
                <Col sm={5}>
                    <Form.Control
                        type="number"
                        defaultValue="20 Minitues"
                        onChange={(e) => setTimeLimit(parseInt(e.target.value || "0", 10))}
                    />
                </Col>
            </Form.Group>

            {/* Multiple Attempts */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Multiple Attempts</Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="No" onChange={(e) => setMultipleAttempts(e.target.value)}>
                        <option selected>No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </Col>
            </Form.Group>


            {/* Show Correct Answers */}
            <Form.Group as={Row} className="mb-4">
                <Form.Label column sm={2}>Show Correct Answers</Form.Label>
                <Col sm={5}>
                    <Form.Control
                        as="textarea"
                        defaultValue="Immediatly"
                        rows={1}
                        onChange={(e) => setShowCorrectAnswers(e.target.value)}
                    />
                </Col>
            </Form.Group>

            {/* Show Access Code */}
            <Form.Group as={Row} className="mb-4">
                <Form.Label column sm={2}>Show Access Code </Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="Yes" onChange={(e) => setAccessCode(e.target.value)}>
                        <option selected>Yes</option>
                        <option value="1">No</option>
                    </Form.Select>
                </Col>
            </Form.Group>



            {/* One question at a Time */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>One question at a Time</Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="Yes" onChange={(e) => setOneQuestionAtATime(e.target.value)}>
                        <option selected>Yes</option>
                        <option value="1">No</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            {/* Webcam Required */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Webcam Required</Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="No" onChange={(e) => setWebcamRequired(e.target.value)}>
                        <option selected>No</option>
                        <option value="1">Yes</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            {/*Lock Question After Asnwering */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Lock Question After Asnwering </Form.Label>
                <Col sm={5}>
                    <Form.Select defaultValue="Yes" onChange={(e) => setLockQuestionAfterAsnwering(e.target.value)}>
                        <option selected>Yes</option>
                        <option value="1">No</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            {/* Dates */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>Assign</Form.Label>
                <Col md={5}>
                    <Card className="h-100">
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Due</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="date"
                                        value={dueDate}
                                        onChange={(e) => setDueDate(e.target.value)}
                                    />
                                    <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Row className="g-3">
                                <Col md={6}>
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={availableFrom}
                                        onChange={(e) => setAvailableFrom(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={until}
                                        onChange={(e) => setUntil(e.target.value)}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Form.Group>

            {/* Footer */}
            <div className="d-flex gap-2 mt-4">
                <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
                <button type="button" className="btn btn-danger" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}