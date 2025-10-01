import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark"
import { BsPlus } from 'react-icons/bs';
export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <BsPlus size={30} aria-label="Add" />
            <IoEllipsisVertical className="fs-4" />
        </div>);
}
