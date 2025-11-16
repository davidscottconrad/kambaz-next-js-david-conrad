"use client";
import DashboardCourse from "./Course/DashboardCourse";
import { useState, useMemo, useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, updateCourse as updateCourseAction, setCourses } from "../Courses/reducer";
import { enroll, unenroll } from "../Enrollments/reducer";
import * as client from "../Courses/client";

interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    description: string;
}

export default function Dashboard() {
    const dispatch = useDispatch();
    const { courses }: { courses: Course[] } = useSelector((state: any) => state.coursesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [course, setCourse] = useState<Course>({
        _id: "0",
        name: "New Course",
        number: "",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
    });

    const fetchCourses = async () => {
        try {
            const courses = await client.findMyCourses();
            dispatch(setCourses(courses));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([...courses, newCourse]));
    };

    const onDeleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    };

    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })));
    };

    const [showAll, setShowAll] = useState(false);

    const handleEditCourse = (courseId: string) => {
        console.log("Editing course", courseId);
        const selected = courses.find((c) => c._id === courseId);
        if (selected) {
            console.log("Editing course:", selected);
            setCourse(selected);
        }
    };

    return (
        <div id="wd-dashboard" className="container">
            <h1 id="wd-dashboard-title" className="d-flex align-items-center">
                <span>Dashboard</span>
                <button
                    className="btn btn-primary ms-auto"
                    id="wd-toggle-enrollments"
                    onClick={() => setShowAll((s) => !s)}
                >
                    {showAll ? "Student View" : "Enrollments"}
                </button>
            </h1>

            {showAll && (
                <div>
                    <h5 className="mt-3">
                        New Course
                        <button
                            onClick={onUpdateCourse}
                            className="btn btn-warning float-end me-2"
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                        <button
                            onClick={onAddNewCourse}
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                        >
                            Add
                        </button>
                    </h5>
                    <br />
                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <FormControl
                        as="textarea"
                        value={course.description}
                        rows={3}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </div>
            )}

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div className="row g-4 mb-5">
                {courses.map((c: Course) => {
                    return (
                        <div key={c._id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="h-100 d-flex flex-column">
                                <DashboardCourse
                                    id={c._id}
                                    title={`${c.number} ${c.name}`}
                                    description={c.description}
                                    onEdit={handleEditCourse}
                                    onDelete={onDeleteCourse}
                                    showAll={showAll}
                                />

                                {currentUser && showAll && (
                                    <div className="d-flex justify-content-center mb-4">
                                        <button
                                            className="btn btn-success mt-2"
                                            onClick={() =>
                                                dispatch(enroll({ userId: currentUser._id, courseId: c._id }))
                                            }
                                        >
                                            Enroll
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
