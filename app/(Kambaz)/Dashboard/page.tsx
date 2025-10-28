"use client";
import DashboardCourse from "./Course/DashboardCourse";
// import * as db from "../Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse } from "../Courses/reducer";
import * as db from "../Database";
interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    description: string;
}

export default function Dashboard() {
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
    const dispatch = useDispatch();
    // const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "",
        startDate: "2023-09-10", endDate: "2023-12-15",
        description: "New Description"
    });

    return (
        <div id="wd-dashboard" className="container">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addNewCourse(course))} > Add </button>
            </h5>
            <br />
            <FormControl value={course.name} className="mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <FormControl as="textarea" value={course.description} rows={3}
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr />

            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.filter((course) =>
                enrollments.some(
                    (enrollment) =>
                        enrollment.user === currentUser?._id &&
                        enrollment.course === course?._id
                )
            ).length})</h2>
            <hr />
            <div className="row">
                {courses.filter((course) =>
                    enrollments.some(
                        (enrollment) =>
                            enrollment.user === currentUser?._id &&
                            enrollment.course === course?._id
                    ))
                    .map((course: Course) => (
                        <DashboardCourse
                            key={course._id}
                            id={course._id}
                            title={`${course.number} ${course.name}`}
                            description={course.description}
                        />
                    ))}
            </div>
        </div >
    );
}
