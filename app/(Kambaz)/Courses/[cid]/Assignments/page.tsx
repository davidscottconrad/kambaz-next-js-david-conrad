"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "next/navigation";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentSideBtn from "./AssignmentSideBtn";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsFileEarmarkText } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment, editAssignment, setAssignment } from './reducer';
import { prettyDate } from "../../../utils/dateUtils";
import { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { RootState } from "../../../store"
import * as coursesClient from "../../client";
import * as assignmentClient from "./client";

export default function Assignments() {
  const { cid } = useParams() as { cid: string };
  const [assignmentName, setAssignmentName] = useState("");

  const dispatch = useDispatch();
  const { assignments } = useSelector((s: RootState) => s.assignmentReducer);
  console.log("Assignments from Redux:", assignments);
  const fetchAssignments = async () => {
    try {
      console.log("Fetching assignments for course:", cid);
      const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
      console.log("Received assignments from API:", assignments);
      dispatch(setAssignment(assignments));
      console.log("Dispatched to Redux");
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }

    //Without dispatch, the data would live only inside that function; 
    //other components wouldn’t see or update from it.
  };
  // ✅ 1. State for Delete Confirmation Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any | null>(null);

  // ✅ 2. Handler to show the modal
  const handleDeleteClick = (a: any, event: React.MouseEvent) => {
    event.preventDefault(); // Stop Link navigation
    event.stopPropagation(); // Stop click from propagating up to Link
    setAssignmentToDelete(a);
    setShowDeleteModal(true);
  };

  // ✅ 3. Handler to confirm deletion
  const handleDeleteConfirm = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id));
    }
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  // ✅ 4. Handler to cancel deletion
  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  };

  const onCreateAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { name: assignmentName, course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(setAssignment([...assignments, assignment]));
  };
  const onRemoveAssignment = async (assignmentId: string) => {
    console.log('----Page onRemoveAssignment---')
    await coursesClient.deleteAssignment(cid, assignmentId);
    const newAssignment = assignments.filter((a: any) => a._id !== assignmentId)
    dispatch(setAssignment(newAssignment));
    setShowDeleteModal(true);
  };
  const onUpdateAssignment = async (assignment: any) => {
    const result = await coursesClient.updateAssignment(cid, assignment);
    //const newAssignment = assignment.map((a: any) => a._id === assignment._id ? assignment : a);
    dispatch(setAssignment(result));
  };
  const saveAssignment = async (assignment: any) => {
    await assignmentClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };


  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div>
      <AssignmentControls /><br /><br /><br />
      <ListGroup className="rounded-0 p-8 mb-5 mx-4 fs-5 border-gray" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
            <span><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS</span>
            <AssignmentControlButtons />
          </div>
        </ListGroupItem>

        {Array.isArray(assignments) && assignments.map((a: any) => {
          const name = a.name ?? "(Untitled)";
          const due = prettyDate(a.dueDate) ?? "No due date";
          const avail = prettyDate(a.availableFrom);
          const pts = a.points ?? 0;
          return (
            <Link
              key={a._id}
              href={`/Courses/${cid}/Assignments/${a._id}`}
              className="text-decoration-none"
            >
              <ListGroupItem
                className="p-3 d-flex align-items-start"
                style={{
                  borderRight: "1px solid #000",
                  borderBottom: "1px solid #000",
                  borderLeft: "4px solid var(--bs-success)",
                }}
                action
              >
                <div className="wd-assign p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <BsFileEarmarkText className="text-success" />
                </div>

                <div className="flex-fill">
                  <div className="fw-semibold mb-1">{name}</div>

                  <div className="small mb-1">
                    <span className="text-danger text-decoration-none">Multiple Modules</span>
                    <span className="mx-2 text-muted">|</span>
                    <span className="text-muted">
                      {avail ? `Not available until ${avail}` : "Available now"}
                      {" "}|
                    </span>
                  </div>

                  <div className="small text-muted">
                    <span className="fw-semibold text-dark">Due</span>
                    <span className="ms-1">{due}</span>
                    <span className="mx-2">|</span>
                    <span className="text-dark">{pts} pts</span>
                  </div>
                </div>

                <div className="ms-auto d-flex align-items-center">

                  <AssignmentSideBtn cid={cid} assignmentId={a._id}
                    deleteAssignment={(assignmentId) => onRemoveAssignment(assignmentId)}
                    editAssignment={(assignmentId) => onUpdateAssignment(assignmentId)} />
                </div>
              </ListGroupItem>
            </Link>
          );
        })}
      </ListGroup>
      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove assignment: <br />
          **"{assignmentToDelete?.name || assignmentToDelete?.name || 'Untitled Assignment'}"**?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


// "use client";
// import { useParams } from "next/navigation";
// import * as db from "../../../Database";
// import AssignmentControls from "./AssignmentControls";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import AssignmentSideBtn from "./AssignmentSideBtn";
// import { ListGroup, ListGroupItem } from "react-bootstrap"
// import { BsGripVertical, BsFileEarmarkText } from "react-icons/bs";
// import Link from "next/link";
// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { useSelector } from "react-redux";


// export default function Assignments() {
//   const { cid } = useParams() as { cid: string };
//   const { assignments } = useSelector((s: any) => s.assignmentReducer);

//   return (
//     <div>
//       <AssignmentControls /><br /><br /><br />
//       <ListGroup className="rounded-0 p-8  mb-5 mx-4 fs-5 border-gray" id="wd-assignments" >
//         {/* Header (no bottom margin so it touches the first row) */}
//         <ListGroupItem className="wd-assignment p-0">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex  justify-content-between">
//             <span><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS </span>
//             <AssignmentControlButtons />
//           </div>
//         </ListGroupItem>

//         {/* Rows */}
//         {assignments.filter((assignment: any) => assignment.course === cid)
//           .map((assignment: any) => (
//             <Link
//               key={assignment._id}  // key on the wrapper is fine
//               href={`/Courses/${cid}/Assignments/${assignment._id}`}
//               className="text-decoration-none"
//             >
//               <ListGroupItem className="p-3 d-flex align-items-start"
//                 style={{ //borderTop: "1px solid #000", 
//                   borderRight: "1px solid #000", borderBottom: "1px solid #000", borderLeft: "4px solid var(--bs-success)"
//                 }} // green left bar 
//                 action >
//                 <div className="wd-assign p-3 ps-1">  {/*left icons*/}
//                   <BsGripVertical className="me-2 fs-3" />
//                   <BsFileEarmarkText className="text-success" />
//                 </div>
//                 <div className="flex-fill"> {/* main text */}
//                   <div className="fw-semibold mb-1">{assignment.title ?? assignment.name}</div>
//                   <div className="small mb-1">
//                     <span className="text-danger text-decoration-none">Multiple Modules</span>
//                     <span className="mx-2 text-muted">|</span>
//                     <span className="text-muted">Not available until May 6 at 12:00am |</span>
//                   </div>
//                   <div className="small text-muted">
//                     <span className="fw-semibold text-dark">Due</span>
//                     <span className="ms-1">May 13 at 12:00am</span>
//                     <span className="mx-2">|</span>
//                     <span className="text-dark">100 pts</span>
//                   </div>
//                 </div>
//                 <div className="ms-auto d-flex align-items-center">  {/* right-side controls */}
//                   <AssignmentSideBtn />
//                 </div>
//               </ListGroupItem>
//             </Link>
//           ))}
//       </ListGroup>
//     </div>
//   );
// }








// <div id="wd-assignments">
//   <input placeholder="Search for Assignments"
//     id="wd-search-assignment" />
//   <button id="wd-add-assignment-group">+ Group</button>
//   <button id="wd-add-assignment">+ Assignment</button>
//   <h3 id="wd-assignments-title">
//     ASSIGNMENTS 40% of Total <button>+</button> </h3>
//   <ul id="wd-assignment-list">
//     <li className="wd-assignment-list-item">
//       <Link href="/Courses/1234/Assignments/123"
//         className="wd-assignment-link" >
//         A1 - ENV + HTML
//       </Link><br />
//       Mutiple Modules | Not avaiable until May 6 at 12:00am | <br />
//       Due May 13 at 11:59pm | 100 pts</li>
//     <li className="wd-assignment-list-item">
//       {/* Complete On Your Own */}
//       <Link href="Course/1234/Assignments/124" className="wd-assignment-link">
//         A2 - CSS + BOOTSTRAP
//       </Link><br />
//       Mutiple Modules | Not avaiable until May 6 at 12:00am | <br />
//       Due May 13 at 11:59pm | 100 pts</li>
//     <li className="wd-assignment-list-item">
//       {/* Complete On Your Own */}
//       <Link href="Course/1234/Assignments/125" className="wd-assignment-link">
//         A3 - JAVASCRIPT + REACT
//       </Link><br />
//       Mutiple Modules | Not avaiable until May 6 at 12:00am | <br />
//       Due May 13 at 11:59pm | 100 pts</li>
//   </ul>
// </div>


