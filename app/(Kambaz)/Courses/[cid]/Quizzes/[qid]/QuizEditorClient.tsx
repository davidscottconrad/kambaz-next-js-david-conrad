"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Table from "react-bootstrap/esm/Table";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import type { Quiz } from "../reducer";

// ---- helpers ---------------------------------------------------------------
const yesNo = (v: any, fallback = "No") => {
    if (v === true || v === "Yes" || v === "yes" || v === 1 || v === "1") return "Yes";
    if (v === false || v === "No" || v === "no" || v === 0 || v === "0") return "No";
    return fallback;
};

const minutes = (v: any) => {
    if (v === undefined || v === null || v === "") return "—";
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? `${n} Minutes` : "—";
};

const textOr = (v: any, fallback = "—") => (v === undefined || v === "" ? fallback : String(v));

const todayStr = new Date().toISOString().split("T")[0];
// ---- component -------------------------------------------------------------
export default function QuizEditorClient() {
    const { cid, qid } = useParams() as { cid: string; qid: string };

    // NOTE: adjust `s.quizReducer` to match your store key
    const { quizzes } = useSelector((s: any) => s.quizReducer) as { quizzes: Quiz[] };

    // Find the quiz by course + id
    const quiz = quizzes.find(q => String(q.course) === String(cid) && String(q._id) === String(qid)) as
        | (Quiz & {
            // optional fields you edit locally; show if you later persist them
            type?: string;
            timeLimit?: number | string;
            multipleAttempts?: boolean | string;
            assignmentGroup?: string;
            shuffleAnswer?: boolean | string;
            showCorrectAnswers?: string;
            accessCode?: string | boolean;
            oneQuestionAtATime?: boolean | string;
            webcamRequired?: boolean | string;
            lockQuestionAfterAsnwering?: boolean | string;
        })
        | undefined;

    if (!quiz) {
        return (
            <div className="p-4">
                <h4 className="mb-3">Quiz not found</h4>
                <Link href={`/Courses/${cid}/Quizzes`} className="btn btn-secondary">Back</Link>
            </div>
        );
    }

    return (
        <div className="p-4">
            {/* Header */}
            <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="d-flex gap-2">
                    <Button variant="outline-secondary">Preview</Button>
                    <Link href={`/Courses/${cid}/Quizzes/${qid}/QuizEditor`} className="btn btn-outline-secondary">Edit</Link>
                </div>
            </div>

            <Card className="p-3 border-dashed" style={{ borderStyle: "dashed" as const }}>
                <div className="px-3 py-2">
                    <h3 className="mb-0">{quiz.title || "Untitled Quiz"}</h3>
                    <Row className="gy-2">
                        <Col xs={6} className="text-end fw-semibold">Quiz Type</Col>
                        <Col xs={6}>{textOr(quiz.type, "Graded Quiz")}</Col>

                        <Col xs={6} className="text-end fw-semibold">Points</Col>
                        <Col xs={6}>{quiz.points ?? 0}</Col>

                        <Col xs={6} className="text-end fw-semibold">Assignment Group</Col>
                        <Col xs={6}>{textOr(quiz.assignmentGroup, "QUIZZES")}</Col>

                        <Col xs={6} className="text-end fw-semibold">Shuffle Answers</Col>
                        <Col xs={6}>{yesNo(quiz.shuffleAnswer, "No")}</Col>

                        <Col xs={6} className="text-end fw-semibold">Time Limit</Col>
                        <Col xs={6}>{minutes(quiz.timeLimit ?? 30)}</Col>

                        <Col xs={6} className="text-end fw-semibold">Multiple Attempts</Col>
                        <Col xs={6}>{yesNo(quiz.multipleAttempts, "No")}</Col>

                        <Col xs={6} className="text-end fw-semibold">View Responses</Col>
                        <Col xs={6}>Always</Col>

                        <Col xs={6} className="text-end fw-semibold">Show Correct Answers</Col>
                        <Col xs={6}>{textOr(quiz.showCorrectAnswers, "Immediately")}</Col>

                        <Col xs={6} className="text-end fw-semibold">One Question at a Time</Col>
                        <Col xs={6}>{yesNo(quiz.oneQuestionAtATime, "Yes")}</Col>

                        <Col xs={6} className="text-end fw-semibold">Require Respondus LockDown Browser</Col>
                        <Col xs={6}>No</Col>

                        <Col xs={6} className="text-end fw-semibold">Required to View Quiz Results</Col>
                        <Col xs={6}>No</Col>

                        <Col xs={6} className="text-end fw-semibold">Webcam Required</Col>
                        <Col xs={6}>{yesNo(quiz.webcamRequired, "No")}</Col>

                        <Col xs={6} className="text-end fw-semibold">Lock Questions After Answering</Col>
                        <Col xs={6}>{yesNo(quiz.lockQuestionAfterAsnwering, "No")}</Col>
                    </Row>
                    <br /><br />
                    <Table>
                        <thead>
                            <tr><th>Due</th><th>For</th><th>Available</th><th>Until</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>{quiz.dueDate ?? todayStr}</td><td>Everyone</td><td>{quiz.availableFrom ?? todayStr}</td><td>{quiz.until ?? todayStr}</td></tr>
                        </tbody>
                    </Table>

                </div>
            </Card>
        </div>
    );
}
