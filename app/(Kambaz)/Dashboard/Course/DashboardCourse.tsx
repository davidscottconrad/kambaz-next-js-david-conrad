import Link from "next/link";
import "./dashboard.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

type DashboardCourseProps = {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
};

export default function DashboardCourse({
    id,
    imageSrc,
    title,
    description,
}: DashboardCourseProps) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)})`;

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-4">
            <Link href={`/Courses/${id}`} className="wd-dashboard-course-link">
                <Card id="card-wrapper">
                    <div
                        className="color-div"
                        style={{ backgroundColor: randomColor }}
                    ></div>
                    <CardBody>
                        <CardTitle className="card-title-dash">{title}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
}
