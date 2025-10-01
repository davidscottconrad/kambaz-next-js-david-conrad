import { IoEllipsisVertical } from "react-icons/io5";

import { BsPlus } from 'react-icons/bs';
export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <span className="badge rounded-pill bg-light text-dark border px-3 py-2">40% of Total</span>
            <BsPlus size={30} aria-label="Add" />
            <IoEllipsisVertical className="fs-4" />
        </div>);
}
