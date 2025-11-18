"use client";
import DashboardCourse from "./Course/DashboardCourse";
import { useState, useMemo, useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, updateCourse as updateCourseAction, setCourses } from "../Courses/reducer";
import * as client from "../Courses/client";

interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

export default function Dashboard() {
    const dispatch = useDispatch();
    const { courses }: { courses: Course[] } = useSelector((state: any) => state.coursesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
    const [allCourses, setAllCourses] = useState<Course[]>([]);

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

    const fetchAllCourses = async () => {
        try {
            const courses = await client.fetchAllCourses();
            setAllCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEnrollments = async () => {
        if (!currentUser) return;
        try {
            const userEnrollments = await client.findCoursesForUser(currentUser._id);
            setEnrollments(userEnrollments);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCourses();
        fetchAllCourses();
        fetchEnrollments();
    }, [currentUser]);

    const onAddNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        dispatch(setCourses([...courses, newCourse]));
        await fetchAllCourses();
    };

    const onDeleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);
        dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
        await fetchAllCourses();
    };

    const onUpdateCourse = async () => {
        await client.updateCourse(course);
        dispatch(setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        })));
        await fetchAllCourses();
    };

    const handleEnroll = async (courseId: string) => {
        if (!currentUser) return;
        try {
            await client.enrollInCourse(currentUser._id, courseId);
            await fetchEnrollments();
            await fetchCourses();
        } catch (error) {
            console.error("Error enrolling:", error);
        }
    };

    const handleUnenroll = async (courseId: string) => {
        if (!currentUser) return;
        try {
            await client.unenrollFromCourse(currentUser._id, courseId);
            await fetchEnrollments();
            await fetchCourses();
        } catch (error) {
            console.error("Error unenrolling:", error);
        }
    };

    const isEnrolled = (courseId: string) => {
        return enrollments.some((e) => e.course === courseId);
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

    const displayedCourses = showAll ? allCourses : courses;

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

            {showAll && currentUser?.role === "FACULTY" && (
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

            <h2 id="wd-dashboard-published">
                {showAll ? "All Courses" : "Published Courses"} ({displayedCourses.length})
            </h2>
            <hr />
            <div className="row g-4 mb-5">
                {displayedCourses.map((c: Course) => {
                    const enrolled = isEnrolled(c._id);
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
                                        {enrolled ? (
                                            <button
                                                className="btn btn-danger mt-2"
                                                onClick={() => handleUnenroll(c._id)}
                                            >
                                                Unenroll
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-success mt-2"
                                                onClick={() => handleEnroll(c._id)}
                                            >
                                                Enroll
                                            </button>
                                        )}
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
