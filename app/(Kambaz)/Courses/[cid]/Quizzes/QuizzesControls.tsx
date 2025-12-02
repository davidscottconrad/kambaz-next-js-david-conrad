"use client"
import { FaPlus } from "react-icons/fa6";
import { Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation"
import { IoEllipsisVertical } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";


export default function QuizControls() {
    const { cid } = useParams() as { cid: string }; // Get the course ID
    const router = useRouter();
    return (
        <div id="wd-quiz-controls" className="text-nowrap">
            <Link href={`/Kambaz/Courses/${cid}/Quizzes/QuizEditor`}>
                <Button variant="secondary" size="lg" className="me-1 float-end text-black" id="wd-add-group-btn" >
                    <IoEllipsisVertical className="position-relative me-1" style={{ bottom: "1px" }} />
                </Button>
            </Link>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-quizz-btn" onClick={() => router.push(`/Courses/${cid}//Quizzes/new/QuizEditor`)}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </Button>
            <div className="position-relative" style={{ width: 400 }}>
                <BsSearch
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    aria-hidden="true" />
                <Form.Control type="search" placeholder="Search..." aria-label="Search assignments" className="ps-5" size="lg" />
            </div>
        </div >


    )
}