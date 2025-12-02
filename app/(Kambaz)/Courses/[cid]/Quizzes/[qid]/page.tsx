/* eslint-disable @typescript-eslint/no-explicit-any */
import QuizDetails from "./QuizDetails";
export default function Page({ params }: { params: { cid: string; aid: string } }) {
    return <QuizDetails />;
}