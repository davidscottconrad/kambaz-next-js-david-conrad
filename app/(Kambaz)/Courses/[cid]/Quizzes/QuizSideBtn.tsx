"use client";
import { useState, forwardRef, MouseEvent } from "react";
import { Dropdown } from "react-bootstrap";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsBan } from "react-icons/bs";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as quizClient from "./client";


type QuizSideBtnProps = {
    qid: string;
    initialPublished?: boolean;
    onDelete?: (quizId: string) => Promise<void>;
    onPublishChange?: (published: boolean) => void;
};

const IconToggle = forwardRef<HTMLButtonElement, { onClick?: (e: MouseEvent) => void }>(
    ({ onClick }, ref) => (
        <button
            ref={ref}
            className="btn p-0 border-0 bg-transparent"
            aria-label="More actions"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick?.(e);
            }}
            onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <IoEllipsisVertical className="fs-4" />
        </button>
    )
);
IconToggle.displayName = "IconToggle";

export default function QuizSideBtn({
    qid,
    initialPublished,
    onDelete,
    onPublishChange
}: QuizSideBtnProps) {
    const [published, setPublished] = useState(initialPublished);
    const { cid } = useParams() as { cid: string };

    const stop = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const togglePublish = async (e: MouseEvent) => {
        stop(e);
        const next = !published;
        try {
            await quizClient.updateQuizPublishStatus(qid, next);
            setPublished(next);
            onPublishChange?.(next);
        } catch (error) {
            console.error("Failed to update publish status:", error);
        }
    };
    return (
        <div className="ms-auto d-flex align-items-center gap-3" onClick={stop}>
            {published ? (
                <GreenCheckmark aria-label="Published" />
            ) : (
                <BsBan className="text-danger fs-3" title="Unpublished" />
            )}

            <Dropdown align="end">
                <Dropdown.Toggle as={IconToggle} id="quiz-actions-toggle" />
                <Dropdown.Menu onClick={stop}>
                    <Link href={`/Courses/${cid}/Quizzes/${qid}/QuizEditor`}>
                        <Dropdown.Item as="button" >Edit</Dropdown.Item>
                    </Link>
                    <Dropdown.Item onClick={() => onDelete?.(qid)}>Delete</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={togglePublish}>
                        {published ? "Unpublish" : "Publish"}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

