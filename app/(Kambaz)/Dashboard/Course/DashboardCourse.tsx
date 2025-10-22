"use client";

import Link from "next/link";
import "./dashboard.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { deleteCourse, updateCourse } from "../../Courses/reducer";

type DashboardCourseProps = {
    id: string;
    title: string;
    description: string;
};

export default function DashboardCourse({
    id,
    title,
    description,
}: DashboardCourseProps) {
    const dispatch = useDispatch();
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)})`;

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the Link navigation
        e.stopPropagation();
        if (window.confirm(`Are you sure you want to delete this course?`)) {
            dispatch(deleteCourse(id));
        }
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4">
            <div style={{ position: "relative", width: "100%" }}>
                <Link
                    href={`/Courses/${id}/Home`}
                    style={{ textDecoration: "none" }}
                    className="wd-dashboard-course-link"
                >
                    <Card id="card-wrapper">
                        <div
                            className="color-div"
                            style={{ backgroundColor: randomColor }}
                        ></div>
                        <CardBody>
                            <CardTitle className="card-title-dash text-nowrap overflow-hidden">
                                {title}
                            </CardTitle>
                            <CardText
                                className="card-text-dash overflow-hidden"
                                style={{ maxHeight: "40px", overflow: "auto", textDecoration: "none" }}
                            >
                                {description}
                            </CardText>
                            <button
                                onClick={handleDelete}
                                className="btn btn-danger btn-sm m-2"
                            >
                                Delete
                            </button>
                            <button className="btn btn-warning btn-sm m-2"
                                onClick={updateCourse} id="wd-update-course-click">
                                Edit </button>
                        </CardBody>
                    </Card>
                </Link>

            </div>
        </div>
    );
}