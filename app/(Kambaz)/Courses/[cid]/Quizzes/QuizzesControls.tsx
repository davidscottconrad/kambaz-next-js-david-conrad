"use client"
import { FaPlus } from "react-icons/fa6";
import { Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
// 2. Import the AssignmentModalEditor component
//import AssignmentEditor from './AssignmentEditor';
import { useDispatch } from 'react-redux';
// 3. Import the addAssignment action and routing hook
import { addAssignment } from '../Assignments/reducer';
import { useParams } from "next/navigation"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { IoEllipsisVertical } from "react-icons/io5";

// Define the template for a new assignment object
const newAssignmentTemplate = {
    name: "New Assignment",
    description: "",
    points: 100,
    dueDate: new Date().toISOString().substring(0, 10),
    availableFrom: new Date().toISOString().substring(0, 10),
    availableUntil: "",
};
export default function AssignmentControls() {
    const { cid } = useParams() as { cid: string }; // Get the course ID
    const dispatch = useDispatch();
    // 1. State for controlling the modal visibility
    const [showModal, setShowModal] = useState(false);

    // 2. State for holding the data of the assignment being created/edited
    const [newAssignment, setNewAssignment] = useState(newAssignmentTemplate);

    // Handlers for the modal
    const handleShow = () => {
        // Reset to the template when opening for a new assignment
        setNewAssignment(newAssignmentTemplate);
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);

    // Handler for the Save button inside the modal
    const handleSave = () => {
        // Dispatch the action to create the new assignment
        dispatch(addAssignment({
            ...newAssignment,
            _id: uuidv4(),
            course: cid, // Ensure the course ID is attached
        }));
        // After dispatching, you typically close the modal
        // In a modal scenario, you don't navigate away, you just close it.
        // If you were using the full-page editor, you would navigate to the Assignments list here.
        handleClose();
    };
    return (
        <div id="wd-assignments" className="text-nowrap">
            <Button variant="secondary" size="lg" className="me-1 float-end text-black" id="wd-add-group-btn" >
                <IoEllipsisVertical className="position-relative me-1" style={{ bottom: "1px" }} />

            </Button>

            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-quizz-btn" onClick={handleShow}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quizz
            </Button>

            <div className="position-relative" style={{ width: 400 }}>
                <BsSearch
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    aria-hidden="true" />
                <Form.Control type="search" placeholder="Search..." aria-label="Search assignments" className="ps-5" size="lg" />
            </div>
            {/* 4. Render the Modal Editor, passing state and handlers */}
            {/* <AssignmentEditor
                show={showModal}
                handleClose={handleClose}
                addAssignment={handleSave}
                dialogTitle="Add New Assignment"
                assignment={newAssignment}
                setAssignment={setNewAssignment}
            /> */}
        </div>


    )
}