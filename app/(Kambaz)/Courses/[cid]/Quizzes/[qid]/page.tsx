/* eslint-disable @typescript-eslint/no-explicit-any */
import QuizEditorClient from "./QuizEditorClient";
export default function Page({ params }: { params: { cid: string; aid: string } }) {
    return <QuizEditorClient />;
}