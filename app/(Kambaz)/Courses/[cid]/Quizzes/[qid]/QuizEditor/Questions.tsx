"use client";

import Button from "react-bootstrap/Button";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import FillInTheBlank from "./FillInTheBlank";

export default function Questions() {
    const router = useRouter();
    const { cid, qid } = useParams<{ cid: string; qid: string }>();
    const [saving, setSaving] = useState(false);

    const handleCancel = () => {
        // Dismiss edits: go back to the quiz page
        router.push(`/Courses/${cid}/Quizzes/${qid}`);
    };

    const newQuestion = () => {
        // Logic to add a new question
        console.log("Adding new question...");
    }

    const handleSave = async () => {
        console.log("Saving quiz questions...");
    };

    return (
        <div className="d-flex justify-content-center flex-column gap-2 mb-3">
            <div className="d-flex justify-content-center">
                <Button
                    variant="light"
                    className="bg-white border border-dark"
                    onClick={newQuestion}
                    disabled={saving}
                >
                    + Question
                </Button>
            </div>
            <hr />
            <MultipleChoice />
            <TrueFalse />
            <FillInTheBlank />
            <div className="d-flex gap-2 justify-content-center">
                <Button variant="danger" onClick={handleCancel} disabled={saving}>
                    Cancel
                </Button>
                <Button onClick={handleSave} disabled={saving}
                    variant="light"
                    className="bg-white border border-dark">
                    {saving ? "Saving…" : "Save"}
                </Button>
            </div>
        </div>
    );
}