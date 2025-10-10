import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function AssignmentControls() {
    return (
        <div className="d-flex justify-content-center align-items-center ms-auto">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}