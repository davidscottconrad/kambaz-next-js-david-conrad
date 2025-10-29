import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
export default function AssignmentControlButtons(
    { assignmentId, deleteAssignment, editAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; editAssignment: (assignmentId: string) => void; }) {
    return (
        <div className="ms-auto d-flex align-items-center">

            <FaTrash className="text-danger me-2 mb-1" onClick={() => {
                console.log("Deleting assignment with ID:", assignmentId);
                deleteAssignment(assignmentId)
            }} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />

        </div>);
}   