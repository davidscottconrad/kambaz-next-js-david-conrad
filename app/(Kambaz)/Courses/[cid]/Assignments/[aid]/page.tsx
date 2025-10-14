"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Form, Row, Col, Card, InputGroup } from "react-bootstrap";
import * as db from "@/app/(Kambaz)/Database";
import { BsCalendarEvent } from "react-icons/bs";

type A = { _id: string; title: string; course: string };
// optional shape if you later add more fields
type AFull = A & {
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  until?: string;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const assignmentId = Array.isArray(aid) ? aid[0] : aid;

  const found = (db.assignments as AFull[]).find(
    a =>
      a.course.toLowerCase() === String(courseId).toLowerCase() &&
      a._id.toLowerCase() === String(assignmentId).toLowerCase()
  );

  // Fallbacks for fields not present in JSON
  const title = found?.title ?? "";
  const description =
    found?.description ??
    `Submit a link to your app's landing page.

Include:
• Your full name and section
• Links to lab assignments
• Link to the Kanbas app
• Links to relevant source repos`;
  const points = found?.points ?? 100;
  const dueDate = found?.dueDate ?? "May 13, 2024, 11:59 PM";
  const availableFrom = found?.availableFrom ?? "May 6, 2024, 12:00 AM";
  const until = found?.until ?? "";

  if (!found) {
    return (
      <div className="p-4">
        <p className="text-danger">Assignment not found.</p>
        <Link href={`/Courses/${courseId}/Assignments`} className="btn btn-secondary">
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Title */}
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control defaultValue={title} />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-4">
        <Form.Control as="textarea" rows={10} defaultValue={description} />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-4">
        <Form.Label column sm={2}>Points</Form.Label>
        <Col sm={10}>
          <Form.Control type="number" defaultValue={points} />
        </Col>
      </Form.Group>

      {/* Assign section */}
      <Form.Group as={Row} className="mb-3" controlId="assign">
        <Form.Label column className="fw-semibold text-md-end">Assign</Form.Label>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Form.Group className="mb-3" controlId="assignTo">
                <Form.Label className="fw-semibold">Assign to</Form.Label>
                <Form.Control placeholder='Everyone' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="due">
                <Form.Label className="fw-semibold">Due</Form.Label>
                <div id="wd-css-styling-due-date">
                  <InputGroup className="mb-3">
                    <Form.Control type="date"
                      value="2024-05-13" />
                    <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
                  </InputGroup>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Form.Group>
      {/* Dates */}
      {/* <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Assign</Form.Label>

        <Form.Group className="mb-3">
          <Form.Label className="fw-semibold d-block">Assign to</Form.Label>
          <Form.Control placeholder="Everyone" />
        </Form.Group>

        <Row className="g-3">
          <Col md={4}>
            <Form.Label>Due</Form.Label>
            <Form.Control defaultValue={dueDate} />
          </Col>
          <Col md={4}>
            <Form.Label>Available from</Form.Label>
            <Form.Control defaultValue={availableFrom} />
          </Col>
          <Col md={4}>
            <Form.Label>Until</Form.Label>
            <Form.Control defaultValue={until} />
          </Col>
        </Row>
      </Form.Group> */}

      {/* Footer buttons navigate back to the list */}
      <div className="d-flex gap-2 mt-4">
        <Link href={`/Courses/${courseId}/Assignments`} className="btn btn-secondary">Cancel</Link>
        <Link href={`/Courses/${courseId}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}




// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor">
//       <label htmlFor="wd-name">Assignment Name</label>
//       <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
//       <textarea id="wd-description">
//         The assignment is available online Submit a link to the landing page of
//       </textarea>
//       <br />
//       <table>
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-points">Points</label>
//           </td>
//           <td>
//             <input id="wd-points" value={100} />
//           </td>
//         </tr>
//         {/* Complete on your own */}
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-group">Assignment Group</label>
//           </td>
//           <td>
//             <select id="wd-group">
//               <option selected value="Assignments">Assignments</option>
//               <option value="Quiz">Quiz</option>
//               <option value="Project">Project</option>
//             </select>
//           </td>
//         </tr>
//         <tr>
//            <td align="right" valign="top">
//             <label htmlFor="wd-display-grade-as">Display Grade as</label>
//            </td>
//            <td>
//             <select id="wd-display-grade-as">
//               <option selected value="Percentages">Percentages</option>
//               <option value="Letter-Grade">Letter-Grade</option>
//             </select>
//           </td>
//         </tr>
//         <tr>
//            <td align="right" valign="top">
//             <label htmlFor="wd-submission-type">Submission Type</label>
//            </td>
//            <td>
//             <select id="wd-submission-type">
//               <option selected value="Percentages">Online</option>
//               <option value="On-Paper">On Paper</option>
//             </select>
//             <div style={{ marginTop:8}}>
//               <div>Online Entry Options</div>
//               <input type="checkbox" name="check-entry-options" id="wd-text-entry"/>
//               <label htmlFor="wd-text-entry">Text Entry</label><br/>
//               <input type="checkbox" name="check-entry-options" id="wd-website-url"/>
//               <label htmlFor="wd-website-url">Website URL</label><br/>
//               <input type="checkbox" name="check-entry-options" id="wd-media-recording"/>
//               <label htmlFor="wd-media-recording">Website URL</label><br/>
//               <input type="checkbox" name="check-entry-options" id="wd-student-annotation"/>
//               <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
//               <input type="checkbox" name="check-entry-options" id="wd-file-upload"/>
//               <label htmlFor="wd-file-upload">File Upload</label><br/>   
//             </div>
//           </td>
//         </tr>

//        <tr>
//         <td align="right" valign="top">
//           <label>Assign</label>
//         </td>
//         <td>
//           <div>
//             <label htmlFor="wd-assign-to">Assign to</label><br />
//             <input id="wd-assign-to" type="text" value="Everyone" /><br /><br />
//             <label htmlFor="wd-due-date">Due</label><br />
//             {/* use datetime-local so it can show date + time like in the screenshot */}
//             <input id="wd-due-date" type="date" value="2024-05-13" /><br /><br />
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//               <div>
//                 <label htmlFor="wd-available-from">Available from</label><br />
//                 <input id="wd-available-from" type="date" value="2024-05-06" />
//               </div>
//               <div>
//                 <label htmlFor="wd-available-until">Until</label><br />
//                 <input id="wd-available-until" type="date" value="2024-05-16"/>
//               </div>
//             </div>
//           </div>
//         </td>
//       </tr>
//       </table>
//     </div>
// );}



