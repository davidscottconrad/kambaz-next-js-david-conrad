import AssignmentEditorClient from "./AssignmentEditorClient";
export default function Page({ params }: { params: { cid: string; aid: string } }) {
    return <AssignmentEditorClient />;
}
