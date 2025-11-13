/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Form, Row, Col, Card, InputGroup } from "react-bootstrap";
import { BsCalendarEvent } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateAssignment, addAssignment } from "../reducer";
import { dateObjectToHtmlDateString } from "../../../../utils/dateUtils";
import * as assignmentClient from "../client";
import * as coursesClient from "../../../client";

export default function AssignmentEditorClient() {

  const { cid, aid } = useParams() as { cid: string; aid: string };
  const router = useRouter();
  const dispatch = useDispatch();
  const[assignment, setAssignment] = useState<any>(null);
  const[loading, setLoading] = useState(true);
  const { assignments } = useSelector((s: any) => s.assignmentReducer) as { assignments: any };

  const found = assignments.find((a: any) => String(a.course) === String(cid) && a._id === aid);
  const isNew = !found || aid === "new";
  // initialize blank/new with today as examples (not hardcoded constants)
  const today = dateObjectToHtmlDateString(new Date());

  //state for form fields:
  const [title, setTitle] = useState(found?.title ?? "");
  const [description, setDescription] = useState(""); // kept local if not persisted
  const [points, setPoints] = useState<number>(found?.points ?? 100);
  const [dueDate, setDueDate] = useState<string>(found?.dueDate ?? "");
  const [availableFrom, setAvailableFrom] = useState<string>(found?.availableFrom ?? "");
  const [until, setUntil] = useState<string>(found?.until ?? "");
  //const payload = { title, points, dueDate, availableFrom, until, course: cid };
  
  // Fetch assignment data if editing existing
  useEffect(() => {
    const fetchAssignment = async () => {
      if (isNew) {
        // Set defaults for new assignment
        setDueDate(today);
        setAvailableFrom(today);
        setLoading(false);
      } else {
        try {
          // Fetch the assignment by ID
          const data = await assignmentClient.findAssignmentById(aid);
          setAssignment(data);

          // Populate form fields
          setTitle(data.title || "");
          setDescription(data.description || "");
          setPoints(data.points || 100);
          setDueDate(data.dueDate || "");
          setAvailableFrom(data.availableFrom || "");
          setUntil(data.until || "");

          setLoading(false);
        } catch (error) {
          console.error("Error fetching assignment:", error);
          setLoading(false);
        }
      }
    };
    fetchAssignment();
  }, [aid, isNew, today]);


  const handleSave = async () => {
    const payload = {
      title,
      description,
      points,
      dueDate,
      availableFrom,
      until,
      course: cid
    };
    // Add console.log HERE to debug
    console.log('=== DEBUG handleSave ===');
    console.log('isNew:', isNew);
    console.log('aid:', aid);
    console.log('cid:', cid);
    console.log('payload:', payload);

    if (isNew) {
      const created = await coursesClient.createAssignmentForCourse(cid, payload);
      dispatch(addAssignment(created));
    } else {
      const updated = await assignmentClient.updateAssignment({ ...payload, _id: aid });
      dispatch(updateAssignment(updated));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }
    
  

  return (
    <div className="p-4">
      {/* Title */}
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      {/* (Optional) Description - not persisted in this slice, keep local or add to slice if needed */}
      <Form.Group className="mb-4">
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as={Row} className="mb-4">
        <Form.Label column sm={2}>Points</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value || "0", 10))}
          />
        </Col>
      </Form.Group>

      {/* Dates */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column className="fw-semibold text-md-end">Assign</Form.Label>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Due</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                  <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Row className="g-3">
                <Col md={6}>
                  <Form.Label>Available from</Form.Label>
                  <Form.Control
                    type="date"
                    value={availableFrom}
                    onChange={(e) => setAvailableFrom(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Until</Form.Label>
                  <Form.Control
                    type="date"
                    value={until}
                    onChange={(e) => setUntil(e.target.value)}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Form.Group>

      {/* Footer */}
      <div className="d-flex gap-2 mt-4">
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
        <button type="button" className="btn btn-danger" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import { Form, Row, Col, Card, InputGroup } from "react-bootstrap";
// import { BsCalendarEvent } from "react-icons/bs";
// import { updateAssignment } from "../reducer";
// import { useParams, useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { useMemo, useState } from "react";

// type A = { _id: string; title: string; course: string };
// type AFull = A & {
//   description?: string;
//   points?: number;
//   dueDate?: string;
//   availableFrom?: string;
//   until?: string;
// };

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams() as { cid: string; aid: string };
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const assignments = useSelector((s: any) => s.assignmentReducer.assignments as AFull[]);

//   const found = assignments?.find((a) => a.course === cid && a._id === aid);
//   const isNew = !found || aid === "new";

//   // base model (for "new", create a temporary id; reducer can replace if needed)
//   const base: AFull = useMemo(
//     () =>
//       isNew
//         ? {
//           _id: `tmp-${Date.now()}`,
//           title: "",
//           course: cid,
//           description:
//             `Submit a link to your app's landing page.\n\nInclude:\n• Your full name and section\n• Links to lab assignments\n• Link to the Kanbas app\n• Links to relevant source repos`,
//           points: 100,
//           dueDate: "2024-05-13T23:59",
//           availableFrom: "2024-05-06T00:00",
//           until: "",
//         }
//         : (found as AFull),
//     [cid, found, isNew]
//   );

//   // local state (controlled inputs)
//   const [title, setTitle] = useState(base.title ?? "");
//   const [description, setDescription] = useState(base.description ?? "");
//   const [points, setPoints] = useState<number>(base.points ?? 100);
//   // Use datetime-local inputs for better UX
//   const [dueDate, setDueDate] = useState(
//     toInputDT(base.dueDate ?? "2024-05-13T23:59")
//   );
//   const [availableFrom, setAvailableFrom] = useState(
//     toInputDT(base.availableFrom ?? "2024-05-06T00:00")
//   );
//   const [until, setUntil] = useState(toInputDT(base.until ?? ""));

//   function toInputDT(s: string) {
//     // accept either "YYYY-MM-DD" or "YYYY-MM-DDTHH:mm" or empty
//     if (!s) return "";
//     if (s.includes(",")) return ""; // ignore old display strings like "May 13, 2024, 11:59 PM"
//     return s.length === 10 ? `${s}T00:00` : s;
//   }

//   const handleSave = () => {
//     const payload: AFull = {
//       ...base,
//       title: title.trim(),
//       description,
//       points: Number(points) || 0,
//       dueDate,
//       availableFrom,
//       until,
//     };

//     // Upsert into Redux
//     dispatch(updateAssignment(payload));

//     // Go back to list; list should re-render from Redux state
//     router.push(`/Courses/${cid}/Assignments`);
//   };

//   return (
//     <div className="p-4">
//       {/* Title */}
//       <Form.Group className="mb-3">
//         <Form.Label>Assignment Name</Form.Label>
//         <Form.Control
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="e.g., A1 — Landing Page"
//         />
//       </Form.Group>

//       {/* Description */}
//       <Form.Group className="mb-4">
//         <Form.Control
//           as="textarea"
//           rows={10}
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </Form.Group>

//       {/* Points */}
//       <Form.Group as={Row} className="mb-4">
//         <Form.Label column sm={2}>
//           Points
//         </Form.Label>
//         <Col sm={10}>
//           <Form.Control
//             type="number"
//             value={points}
//             onChange={(e) => setPoints(parseInt(e.target.value || "0", 10))}
//           />
//         </Col>
//       </Form.Group>

//       {/* Assign section */}
//       <Form.Group as={Row} className="mb-3" controlId="assign">
//         <Form.Label column className="fw-semibold text-md-end">
//           Assign
//         </Form.Label>
//         <Col md={6}>
//           <Card className="h-100">
//             <Card.Body>
//               <Form.Group className="mb-3" controlId="assignTo">
//                 <Form.Label className="fw-semibold">Assign to</Form.Label>
//                 <Form.Control placeholder="Everyone" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="due">
//                 <Form.Label className="fw-semibold">Due</Form.Label>
//                 <div id="wd-css-styling-due-date">
//                   <InputGroup className="mb-3">
//                     <Form.Control
//                       type="datetime-local"
//                       value={dueDate}
//                       onChange={(e) => setDueDate(e.target.value)}
//                     />
//                     <InputGroup.Text>
//                       <BsCalendarEvent />
//                     </InputGroup.Text>
//                   </InputGroup>
//                 </div>
//               </Form.Group>

//               <Row className="g-3">
//                 <Col md={6}>
//                   <Form.Label>Available from</Form.Label>
//                   <Form.Control
//                     type="datetime-local"
//                     value={availableFrom}
//                     onChange={(e) => setAvailableFrom(e.target.value)}
//                   />
//                 </Col>
//                 <Col md={6}>
//                   <Form.Label>Until</Form.Label>
//                   <Form.Control
//                     type="datetime-local"
//                     value={until}
//                     onChange={(e) => setUntil(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Form.Group>

//       {/* Footer buttons */}
//       <div className="d-flex gap-2 mt-4">
//         <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
//           Cancel
//         </Link>
//         <button type="button" className="btn btn-danger" onClick={handleSave}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import { Form, Row, Col, Card, InputGroup } from "react-bootstrap";
// import * as db from "@/app/(Kambaz)/Database";
// import { BsCalendarEvent } from "react-icons/bs";
// import { updateAssignment } from "../reducer";
// import { useParams, useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";


// type A = { _id: string; title: string; course: string };
// // optional shape if you later add more fields
// type AFull = A & {
//   description?: string;
//   points?: number;
//   dueDate?: string;
//   availableFrom?: string;
//   until?: string;
// };

// export default function AssignmentEditor() {
//   const params = useParams() as { cid: string; aid: string };
//   const { cid, aid } = params;
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
//   // `assignments` is typed from the slice if the slice's initialState was typed.
//   const found = assignments.find((a: any) => a.course === cid && a._id === aid);

//   // Fallbacks for fields not present in JSON
//   const title = found?.title ?? "";
//   const description =
//     found?.description ??
//     `Submit a link to your app's landing page.

// Include:
// • Your full name and section
// • Links to lab assignments
// • Link to the Kanbas app
// • Links to relevant source repos`;
//   const points = found?.points ?? 100;
//   const dueDate = found?.dueDate ?? "May 13, 2024, 11:59 PM";
//   const availableFrom = found?.availableFrom ?? "May 6, 2024, 12:00 AM";
//   const until = found?.until ?? "";

//   if (!found) {
//     return (
//       <div className="p-4">
//         <p className="text-danger">Assignment not found.</p>
//         <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
//           Back to Assignments
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       {/* Title */}
//       <Form.Group className="mb-3">
//         <Form.Label>Assignment Name</Form.Label>
//         <Form.Control defaultValue={title} />
//       </Form.Group>

//       {/* Description */}
//       <Form.Group className="mb-4">
//         <Form.Control as="textarea" rows={10} defaultValue={description} />
//       </Form.Group>

//       {/* Points */}
//       <Form.Group as={Row} className="mb-4">
//         <Form.Label column sm={2}>Points</Form.Label>
//         <Col sm={10}>
//           <Form.Control type="number" defaultValue={points} />
//         </Col>
//       </Form.Group>

//       {/* Assign section */}
//       <Form.Group as={Row} className="mb-3" controlId="assign">
//         <Form.Label column className="fw-semibold text-md-end">Assign</Form.Label>
//         <Col md={6}>
//           <Card className="h-100">
//             <Card.Body>
//               <Form.Group className="mb-3" controlId="assignTo">
//                 <Form.Label className="fw-semibold">Assign to</Form.Label>
//                 <Form.Control placeholder='Everyone' />
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="due">
//                 <Form.Label className="fw-semibold">Due</Form.Label>
//                 <div id="wd-css-styling-due-date">
//                   <InputGroup className="mb-3">
//                     <Form.Control type="date"
//                       value="2024-05-13" />
//                     <InputGroup.Text><BsCalendarEvent /></InputGroup.Text>
//                   </InputGroup>
//                 </div>
//               </Form.Group>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Form.Group>
     

//       {/* Footer buttons navigate back to the list */}
//       <div className="d-flex gap-2 mt-4">
//         <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
//         <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
//       </div>
//     </div>
//   );
// }




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



