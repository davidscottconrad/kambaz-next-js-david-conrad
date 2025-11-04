"use client";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import FillInTheBlank from "./FillInTheBlank";

type QType = "multiple-choice" | "true-false" | "fill-in-the-blank";
type QuestionItem = { id: string; type: QType };

export default function Questions() {
    const router = useRouter();
    const { cid, qid } = useParams<{ cid: string; qid: string }>();
    const [saving, setSaving] = useState(false);
    const [questionType, setQuestionType] = useState<QType>("multiple-choice");

    const [items, setItems] = useState<QuestionItem[]>([]);

    const newId = () =>
        typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2);

    const handleCancel = () => {
        // Dismiss edits: go back to the quiz page
        router.push(`/Courses/${cid}/Quizzes/${qid}`);
    };

    const newQuestion = () => {
        // Add a new editor of the currently selected type
        setItems((prev) => [...prev, { id: newId(), type: questionType }]);
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

            {/* Question type selector (controls which type gets added) */}
            <div className="d-flex justify-content-center">
                <Form.Select
                    aria-label="Select question type"
                    value={questionType}
                    onChange={(e) =>
                        setQuestionType(e.target.value as QType)
                    }
                    className="bg-white border border-dark text-secondary"
                    style={{ minWidth: "14rem", maxWidth: "18rem" }}
                >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="fill-in-the-blank">Fill in the Blank</option>
                </Form.Select>
            </div>

            <hr />

            {/* Render all added question editors */}
            <div className="d-flex flex-column gap-4">
                {items.map((it) => (
                    <div key={it.id}>
                        {it.type === "multiple-choice" && <MultipleChoice />}
                        {it.type === "true-false" && <TrueFalse />}
                        {it.type === "fill-in-the-blank" && <FillInTheBlank />}
                    </div>
                ))}
            </div>

            {/* If you want only the inner component's Save/Cancel, remove this footer */}
            <div className="d-flex gap-2 justify-content-center mt-3">
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