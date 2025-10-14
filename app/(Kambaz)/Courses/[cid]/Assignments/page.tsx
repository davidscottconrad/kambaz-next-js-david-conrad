"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentSideBtn from "./AssignmentSideBtn";
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { BsGripVertical, BsFileEarmarkText } from "react-icons/bs";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams() as { cid: string };
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentControls /><br /><br /><br />
      <ListGroup className="rounded-0 p-8  mb-5 mx-4 fs-5 border-gray" id="wd-assignments" >
        {/* Header (no bottom margin so it touches the first row) */}
        <ListGroupItem className="wd-assignment p-0">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex  justify-content-between">
            <span><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS </span>
            <AssignmentControlButtons />
          </div>
        </ListGroupItem>


        {/* Rows */}
        {assignments.filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <Link
              key={assignment._id}                                // key on the wrapper is fine
              href={`/Courses/${cid}/Assignments/${assignment._id}`}
              className="text-decoration-none"
            >
              <ListGroupItem key={assignment._id} className="p-3 d-flex align-items-start"
                style={{ //borderTop: "1px solid #000", 
                  borderRight: "1px solid #000", borderBottom: "1px solid #000", borderLeft: "4px solid var(--bs-success)"
                }} // green left bar 
                action >
                <div className="wd-assign p-3 ps-1">  {/*left icons*/}
                  <BsGripVertical className="me-2 fs-3" />
                  <BsFileEarmarkText className="text-success" />
                </div>
                <div className="flex-fill"> {/* main text */}
                  <div className="fw-semibold mb-1">{assignment.title}</div>
                  <div className="small mb-1">
                    <span className="text-danger text-decoration-none">Multiple Modules</span>
                    <span className="mx-2 text-muted">|</span>
                    <span className="text-muted">Not available until May 6 at 12:00am |</span>
                  </div>
                  <div className="small text-muted">
                    <span className="fw-semibold text-dark">Due</span>
                    <span className="ms-1">May 13 at 12:00am</span>
                    <span className="mx-2">|</span>
                    <span className="text-dark">100 pts</span>
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">  {/* right-side controls */}
                  <AssignmentSideBtn />
                </div>
              </ListGroupItem>
            </Link>
          ))}
      </ListGroup>
    </div>
  );
}








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


