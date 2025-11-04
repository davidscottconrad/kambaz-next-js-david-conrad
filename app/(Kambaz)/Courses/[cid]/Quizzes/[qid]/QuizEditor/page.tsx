"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Form, Row, Col, Card, InputGroup, Tabs, Tab } from "react-bootstrap";
import { BsCalendarEvent } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateQuiz, addQuiz, Quiz } from "../../reducer";
import Questions from "./Questions";


export default function QuizEditor() {
    const { cid, qid } = useParams() as { cid: string; qid: string };
    const router = useRouter();
    const dispatch = useDispatch();
    const { quizzes } = useSelector((s: any) => s.quizReducer) as { quizzes: Quiz[] };

    const found = quizzes.find((a) => String(a.course) === String(cid) && a._id === qid);
    const isNew = !found || qid === "new";


    const today = new Date().toISOString().split("T")[0];

    const [title, setTitle] = useState(found?.title ?? "");
    const [type, setType] = useState(found?.type ?? "Graded Quiz");
    const [timeLimit, setTimeLimit] = useState<number>(found?.timeLimit ?? 20);
    const [multipleAttempts, setMultipleAttempts] = useState(found?.multipleAttempts ?? "No");
    const [assignmentGroup, setAssignmentGroup] = useState(found?.assignmentGroup ?? "Quizzes");
    const [shuffleAnswer, setShuffleAnswer] = useState(found?.shuffleAnswer ?? "Yes");

    const [showCorrectAnswers, setShowCorrectAnswers] = useState(found?.showCorrectAnswers ?? "Immediately");
    const [accessCode, setAccessCode] = useState(found?.accessCode ?? "Yes");
    const [oneQuestionAtATime, setOneQuestionAtATime] = useState(found?.oneQuestionAtATime ?? "Yes");
    const [webcamRequired, setWebcamRequired] = useState(found?.webcamRequired ?? "No");
    const [lockQuestionAfterAsnwering, setLockQuestionAfterAsnwering] = useState(found?.lockQuestionAfterAsnwering ?? "Yes");
    const [points, setPoints] = useState<number>(found?.points ?? 100);
    const [dueDate, setDueDate] = useState<string>(found?.dueDate ?? today);
    const [availableFrom, setAvailableFrom] = useState<string>(found?.availableFrom ?? today);
    const [until, setUntil] = useState<string>(found?.until ?? today);


    useEffect(() => {
        if (isNew) {
            setDueDate((v) => v || today);
            setAvailableFrom((v) => v || today);
        }
    }, [isNew, today]);

    const handleSave = () => {
        const payload = {
            course: cid,
            title: title.trim() || "(Untitled)",
            points,
            dueDate: dueDate || undefined,
            availableFrom: availableFrom || undefined,
            until: until || undefined,
            // persist the additional settings (safe if reducer ignores unknowns)
            type,
            timeLimit,
            multipleAttempts,
            assignmentGroup,
            shuffleAnswer,
            showCorrectAnswers,
            accessCode,
            oneQuestionAtATime,
            webcamRequired,
            lockQuestionAfterAsnwering,
        };

        if (isNew) {
            dispatch(addQuiz(payload as any));
        } else {
            dispatch(updateQuiz({ _id: qid, changes: payload } as any));
        }
        router.push(`/Courses/${cid}/Quizzes`);
    };

    return (
        <div className="p-4">
            <Tabs defaultActiveKey="details" id="quiz-editor-tabs" className="mb-3">
                <Tab eventKey="details" title="Details">
                    {/* Title */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Title</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="text"
                                value={title}
                                placeholder="Quiz title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    {/* Quiz Type */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Quiz Type</Form.Label>
                        <Col sm={5}>
                            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="Graded Quiz">Graded Quiz</option>
                                <option value="Practice Quiz">Practice Quiz</option>
                                <option value="Graded Survey">Graded Survey</option>
                                <option value="Ungraded Survey">Ungraded Survey</option>
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
                            <Form.Select value={assignmentGroup} onChange={(e) => setAssignmentGroup(e.target.value)}>
                                <option value="Quizzes">Quizzes</option>
                                <option value="Exams">Exams</option>
                                <option value="Assignments">Assignments</option>
                                <option value="Project">Project</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* Shuffle Answer */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Shuffle Answers</Form.Label>
                        <Col sm={5}>
                            <Form.Select value={shuffleAnswer} onChange={(e) => setShuffleAnswer(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* Time Limit */}
                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm={2}>Time Limit (minutes)</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                type="number"
                                value={timeLimit}
                                min={0}
                                onChange={(e) => setTimeLimit(Number(e.target.value || 0))}
                            />
                        </Col>
                    </Form.Group>

                    {/* Multiple Attempts */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Multiple Attempts</Form.Label>
                        <Col sm={5}>
                            <Form.Select value={multipleAttempts} onChange={(e) => setMultipleAttempts(e.target.value)}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* Show Correct Answers */}
                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm={2}>Show Correct Answers</Form.Label>
                        <Col sm={5}>
                            <Form.Control
                                as="textarea"
                                rows={1}
                                value={showCorrectAnswers}
                                onChange={(e) => setShowCorrectAnswers(e.target.value)}
                                placeholder="Immediately"
                            />
                        </Col>
                    </Form.Group>

                    {/* Access Code */}
                    <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm={2}>Access Code</Form.Label>
                        <Col sm={5}>
                            <Form.Select value={accessCode} onChange={(e) => setAccessCode(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* One question at a Time */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>One question at a time</Form.Label>
                        <Col sm={5}>
                            <Form.Select value={oneQuestionAtATime} onChange={(e) => setOneQuestionAtATime(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* Webcam Required */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Webcam required</Form.Label>
                        <Col sm={5}>
                            <Form.Select value={webcamRequired} onChange={(e) => setWebcamRequired(e.target.value)}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    {/* Lock Question After Answering */}
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Lock question after answering</Form.Label>
                        <Col sm={5}>
                            <Form.Select value={lockQuestionAfterAsnwering} onChange={(e) => setLockQuestionAfterAsnwering(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
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
                        <Link href={`/Courses/${cid}/Quizzes`} className="btn btn-secondary">Cancel</Link>
                        <button type="button" className="btn btn-danger" onClick={handleSave}>Save</button>
                    </div>
                </Tab>

                <Tab eventKey="quizzes" title="Quizzes">
                    <Questions />
                </Tab>
            </Tabs>
        </div>
    );
}