"use client"
import { FaPlus } from "react-icons/fa6";
import { Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
// 2. Import the AssignmentModalEditor component
import AssignmentEditor from './AssignmentEditor';
import { useDispatch } from 'react-redux';
// 3. Import the addAssignment action and routing hook
import { addAssignment } from '../Assignments/reducer';
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { useEffect, } from "react";



// Define the template for a new assignment object
// const newAssignmentTemplate = {
//     name: "New Assignment",
//     description: "",
//     points: 100,
//     dueDate: new Date().toISOString().substring(0, 10),
//     availableFrom: new Date().toISOString().substring(0, 10),
//     availableUntil: "",
// };
export default function AssignmentControls() {
    const router = useRouter();
    const { cid } = useParams() as { cid: string }; // Get the course ID
    return (
        <div id="wd-assignments" className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn" onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end text-black" id="wd-add-group-btn" >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>

            <div className="position-relative" style={{ width: 400 }}>
                <BsSearch
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                    aria-hidden="true" />
                <Form.Control type="search" placeholder="Search..." aria-label="Search assignments" className="ps-5" size="lg" />
            </div>

        </div>


    )
}