"use client";

import Link from "next/link";
import "./dashboard.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { useMemo } from "react";

type DashboardCourseProps = {
    id: string;
    title: string;
    description: string;
    onEdit: (courseId: string) => void;
    onDelete: (courseId: string) => void;
    showAll: boolean;
};

export default function DashboardCourse({
    id,
    title,
    description,
    onEdit,
    onDelete,
    showAll,
}: DashboardCourseProps) {
    const randomColor = useMemo(
        () =>
            `rgb(${Math.floor(Math.random() * 256)},
                  ${Math.floor(Math.random() * 256)},
                  ${Math.floor(Math.random() * 256)})`,
        []
    );

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.confirm(`Are you sure you want to delete this course?`)) {
            onDelete(id);
        }
    };

    const handleEdit = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onEdit(id);
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4">
            <div style={{ position: "relative", width: "100%" }}>
                <Link
                    href={`/Courses/${id}/Home`}
                    style={{ textDecoration: "none" }}
                    className="wd-dashboard-course-link"
                >
                    <Card id="card-wrapper" className="h-100 d-flex flex-column justify-content-between">
                        <div
                            className="color-div"
                            style={{ backgroundColor: randomColor }}
                        ></div>

                        <CardBody className="d-flex flex-column justify-content-between">
                            <div>
                                <CardTitle className="card-title-dash text-nowrap overflow-hidden">
                                    {title}
                                </CardTitle>
                                <CardText
                                    className="card-text-dash overflow-hidden"
                                    style={{
                                        maxHeight: "40px",
                                        overflow: "auto",
                                        textDecoration: "none",
                                    }}
                                >
                                    {description}
                                </CardText>
                            </div>

                            {showAll && (
                                <div className="mt-3 d-flex justify-content-center">
                                    <button
                                        onClick={handleDelete}
                                        className="btn btn-danger btn-sm m-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-warning btn-sm m-2"
                                        onClick={handleEdit}
                                        id="wd-edit-course-click"
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </CardBody>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
