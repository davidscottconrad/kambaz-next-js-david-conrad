"use client"
import QuizzesControls from "./QuizzesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { prettyDate } from "../../../utils/dateUtils";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import QuizSideBtn from "./QuizSideBtn";
import { LuRocket } from "react-icons/lu";
import { Modal, Button } from 'react-bootstrap';
import { useState } from "react";
import { deleteQuiz, updateQuiz } from './reducer';
import { RootState } from "../../../store";


export default function QuizType() {
    type QuizType = {
        _id: string;
        course: string | number;
        title?: string;
        name?: string;
        points?: number;
        questions?: number;
        dueDate?: string;
        availableFrom?: string;
        until?: string;
        published?: boolean;
    };
    const { cid } = useParams() as { cid: string };
    const dispatch = useDispatch();
    const { quizzes } = useSelector((q: RootState) => q.quizReducer) as {
        quizzes: QuizType[];
    };

    // ✅ 1. State for Delete Confirmation Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [quizToDelete, setAssignmentToDelete] = useState<QuizType | null>(null);

    // ✅ 2. Handler to show the modal
    const handleDeleteClick = (a: QuizType, event: React.MouseEvent) => {
        event.preventDefault(); // Stop Link navigation
        event.stopPropagation(); // Stop click from propagating up to Link
        setAssignmentToDelete(a);
        setShowDeleteModal(true);
    };

    // ✅ 3. Handler to confirm deletion
    const handleDeleteConfirm = () => {
        if (quizToDelete) {
            dispatch(deleteQuiz(quizToDelete._id));
        }
        setShowDeleteModal(false);
        setAssignmentToDelete(null);
    };

    // ✅ 4. Handler to cancel deletion
    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
        setAssignmentToDelete(null);
    };
    return (
        <div>
            <QuizzesControls /><br /><br /><br />
            <ListGroup className="rounded-0 p-8 mb-5 mx-4 fs-5 border-gray" id="wd-quizzes">
                <ListGroupItem className="wd-quizzes p-0">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
                        <span><BsGripVertical className="me-2 fs-3" /> Assignment Quizzes</span>

                    </div>
                </ListGroupItem>

                {quizzes
                    .filter((q) => String(q.course) === String(cid))
                    .map((q) => {

                        const title = q.title ?? "(Untitled)";
                        const due = prettyDate(q.dueDate) ?? "2025-01-10";
                        const avail = prettyDate(q.availableFrom);
                        const pts = q.points ?? 0;
                        const questionNum = q.questions ?? 0;
                        const initialPublished = Boolean((q as any).published);

                        return (
                            <Link
                                key={q._id}
                                href={`/Courses/${cid}/Quizzes/${q._id}`}
                                className="text-decoration-none"
                            >
                                <ListGroupItem
                                    className="p-3 d-flex align-items-start"
                                    style={{
                                        borderRight: "1px solid #000",
                                        borderBottom: "1px solid #000",
                                        borderLeft: "4px solid var(--bs-success)",
                                    }}
                                    action
                                >
                                    <div className="wd-assign p-3 ps-1">
                                        <LuRocket className="text-success me-2 fs-3" />

                                    </div>

                                    <div className="flex-fill">
                                        <div className="fw-semibold mb-1">{title}</div>


                                        <div className="small mb-1">
                                            <span className="text-decoration-none">Closed</span>
                                            <span className="mx-2 text-muted">|</span>
                                            <span className="fw-semibold ">Due</span>
                                            <span className="ms-1">{due}</span>
                                            <span className="mx-2">|</span>
                                            <span className="text-dark">{pts} pts</span>
                                            <span className="mx-2">|</span>
                                            <span className="text-dark">{pts} Questions</span>
                                        </div>
                                    </div>

                                    <div className="ms-auto d-flex align-items-center">
                                        <QuizSideBtn qid={q._id}
                                            initialPublished={initialPublished}
                                            onDelete={() => dispatch(deleteQuiz(q._id))}
                                            onPublishChange={(published) =>
                                                dispatch(updateQuiz({ _id: q._id, changes: { published } }))} />
                                    </div>
                                </ListGroupItem>
                            </Link>
                        );
                    })}
            </ListGroup>
            <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to remove assignment: <br />
                    **"{quizToDelete?.title || quizToDelete?.name || 'Untitled Quiz'}"**?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteCancel}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Yes, Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}