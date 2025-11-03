"use client";
import DashboardCourse from "./Course/DashboardCourse";
import { useState, useMemo } from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, updateCourse } from "../Courses/reducer";
import { enroll, unenroll } from "../Enrollments/reducer";

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
    const enrollments: any[] = useSelector(
        (state: any) => state.enrollments?.enrollments ?? []
    );

    const [course, setCourse] = useState<Course>({
        _id: "0",
        name: "New Course",
        number: "",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
    });

    const [showAll, setShowAll] = useState(false);

    const isEnrolled = (courseId: string) =>
        !!currentUser &&
        enrollments.some((e: any) => e.user === currentUser._id && e.course === courseId);

    const visibleCourses = useMemo(() => {
        if (showAll) return courses;
        return courses.filter((c: Course) => isEnrolled(c._id));
    }, [showAll, courses, enrollments, currentUser]);

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
                            className="btn btn-warning float-end me-2"
                            id="wd-update-course-click"
                            onClick={() => dispatch(updateCourse(course))}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() => dispatch(addNewCourse(course))}
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

            <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
            <hr />
            <div className="row g-4 mb-5">
                {visibleCourses.map((c: Course) => {
                    const enrolled = isEnrolled(c._id);
                    return (
                        <div key={c._id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div className="h-100 d-flex flex-column">
                                <DashboardCourse
                                    id={c._id}
                                    title={`${c.number} ${c.name}`}
                                    description={c.description}
                                    onEdit={handleEditCourse}
                                    showAll={showAll} // 👈 pass it down
                                />

                                {currentUser && showAll && (
                                    <div className="d-flex justify-content-center mb-4">
                                        <button
                                            className={`btn mt-2 ${enrolled ? "btn-danger" : "btn-success"}`}
                                            onClick={() =>
                                                enrolled
                                                    ? dispatch(unenroll({ userId: currentUser._id, courseId: c._id }))
                                                    : dispatch(enroll({ userId: currentUser._id, courseId: c._id }))
                                            }
                                        >
                                            {enrolled ? "Unenroll" : "Enroll"}
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
