import DashboardCourse from "./Course/DashboardCourse";
import * as db from "../Database";
export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard" className="container">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2>
            <hr />

            <div className="row">
                {courses.map((course) => (
                    <DashboardCourse
                        key={course._id}
                        id={course._id}
                        title={`${course.number} ${course.name}`}
                        description={course.description}
                    />
                ))}
            </div>
        </div>
    );
}
