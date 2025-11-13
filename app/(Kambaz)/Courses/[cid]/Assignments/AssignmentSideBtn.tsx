import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa"
import { redirect, useRouter } from "next/navigation";


export default function AssignmentSideBtn({ cid, assignmentId, deleteAssignment, editAssignment }: { cid: string, assignmentId: string; deleteAssignment: (assignmentId: string) => void; editAssignment: (assignmentId: string) => void }) {
    const router = useRouter();
    return (
        <div className="float-end">
            <FaPencil className="text-primary me-3" onClick={() => {
                // editAssignment(assignmentId)
                router.push(`/Courses/${cid}/Assignments/${assignmentId}`);
            }} />
            <FaTrash className="text-danger me-2 mb-1" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteAssignment(assignmentId)
            }} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>);
}


