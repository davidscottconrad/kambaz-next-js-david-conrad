"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import QuizzesControls from "./QuizzesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import QuizSideBtn from "./QuizSideBtn";
import { LuRocket } from "react-icons/lu";
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { setQuiz, addQuiz, updateQuiz, deleteQuiz, editQuiz } from './reducer';
import { RootState } from "../../../store";
import * as coursesClient from "../../client";
import * as quizClient from "./client"


export default function QuizType() {

    const { cid } = useParams() as { cid: string };
    const [quizName, setQuizName] = useState("");
    const dispatch = useDispatch();
    const { quizzes } = useSelector((q: RootState) => q.quizReducer);
    console.log("Quizzes from Redux:", quizzes);

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return "No date";
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Returns "2023-01-25"
    };

    // ✅ 1. State for Delete Confirmation Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [quizToDelete, setQuizToDelete] = useState<any | null>(null);

    // ✅ 2. Handler to show the modal
    const handleDeleteClick = (q: any, event: React.MouseEvent) => {
        event.preventDefault(); // Stop Link navigation
        event.stopPropagation(); // Stop click from propagating up to Link
        setQuizToDelete(q);
        setShowDeleteModal(true);
    };

    // ✅ 3. Handler to confirm deletion
    const handleDeleteConfirm = () => {
        if (quizToDelete) {
            dispatch(deleteQuiz(quizToDelete._id));
        }
        setShowDeleteModal(false);
        setQuizToDelete(null);
    };

    // ✅ 4. Handler to cancel deletion
    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
        setQuizToDelete(null);
    };


    const onCreateQuizForCourse = async () => {
        console.log('---Creating Quiz on page.tsx---')
        if (!cid) return;
        const newQuiz = { name: quizName, course: cid };
        console.log('New Quiz: ', newQuiz.name);
        const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
        dispatch(setQuiz([...quizzes, quiz]));
        console.log('After dispatch');

    };

    const onRemoveQuiz = async (quizId: string) => {
        console.log('----Page onRemoveQuiz---')
        await coursesClient.deleteQuiz(cid, quizId);
        dispatch(deleteQuiz(quizId));
        setShowDeleteModal(true);
    };

    const onUpdateQuiz = async (quiz: any) => {
        const result = await coursesClient.updateQuiz(cid, quiz);
        dispatch(setQuiz(result));
    };

    const saveQuiz = async (quiz: any) => {
        await quizClient.updateQuiz(cid, quiz);
        dispatch(updateQuiz(quiz));
    };
    const handlePublishChange = (quizId: string, published: boolean) => {
        const updatedQuizzes = quizzes.map((quiz: any) =>
            quiz._id === quizId
                ? { ...quiz, published }
                : quiz
        );
        dispatch(setQuiz(updatedQuizzes));
    };

    const fetchQuizzes = async () => {
        try {
            console.log("Fetching quizzes for course:", cid);
            const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
            console.log("Received quizzes from API:", quizzes);
            const sortedQuizzes = quizzes.sort((a: any, b: any) => {
                const dateA = new Date(a.availableFrom || '1900-01-01');
                const dateB = new Date(b.availableFrom || '1900-01-01');
                return dateA.getTime() - dateB.getTime();
            });
            dispatch(setQuiz(sortedQuizzes));
            console.log("Dispatched sorted quizzes to Redux");
        } catch (error) {
            console.error("Error fetching quizzes:", error);
        }
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);



    return (
        <div>
            <QuizzesControls /><br /><br /><br />
            <ListGroup className="rounded-0 p-8 mb-5 mx-4 fs-5 border-gray" id="wd-quizzes">
                <ListGroupItem className="wd-quizzes p-0">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
                        <span><BsGripVertical className="me-2 fs-3" /> Assignment Quizzes</span>

                    </div>
                </ListGroupItem>

                {Array.isArray(quizzes) && quizzes.map((q: any) => {
                    const title = q.title ?? "(Untitled)";
                    const due = formatDate(q.dueDate) ?? "2025-01-10";
                    const avail = formatDate(q.availableFrom);
                    const pts = q.points ?? 0;
                    const questionNum = q.questions ?? 0;
                    const initialPublished = q.published;

                    return (
                        <Link key={q._id} href={`/Courses/${cid}/Quizzes/${q._id}`} className="text-decoration-none">
                            <ListGroupItem
                                className="p-3 d-flex align-items-start"
                                style={{ borderRight: "1px solid #000", borderBottom: "1px solid #000", borderLeft: "4px solid var(--bs-success)" }}>
                                <div className="wd-assign p-3 ps-1">
                                    <LuRocket className="text-success me-2 fs-3" />
                                </div>
                                <div className="flex-fill">
                                    <div className="fw-semibold mb-1">{title}</div>

                                    <div className="small mb-1">
                                        <span className="text-decoration-none">Avaiable</span>
                                        <span className="ms-1">{avail}</span>
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
                                        onDelete={onRemoveQuiz}
                                        onPublishChange={(published) =>
                                            handlePublishChange(q._id, published)} />
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