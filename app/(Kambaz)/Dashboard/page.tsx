import DashboardCourse from "./Course/DashboardCourse";

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="container">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2>
            <hr />

            <div className="row">
                <DashboardCourse
                    id="1234"
                    imageSrc="/images/reactjs.png"
                    title="CS1234 React JS"
                    description="Full Stack software developer"
                />
                <DashboardCourse
                    id="2101"
                    imageSrc="/images/algorithms.jpg"
                    title="CS2101 Algorithms"
                    description="Algorithms"
                />
                <DashboardCourse
                    id="3550"
                    imageSrc="/images/astrophysics.jpg"
                    title="PH3550 Astrophysics"
                    description="Astrophysics"
                />
                <DashboardCourse
                    id="1210"
                    imageSrc="/images/geometry.jpg"
                    title="MATH1210 Geometry"
                    description="Geometry"
                />
                <DashboardCourse
                    id="2315"
                    imageSrc="/images/discrete-math.jpg"
                    title="MATH2315 Discrete Mathematics"
                    description="Discrete Mathematics"
                />
                <DashboardCourse
                    id="4100"
                    imageSrc="/images/ai.jpg"
                    title="CS4100 Artificial Intelligence"
                    description="AI Class"
                />
                <DashboardCourse
                    id="3200"
                    imageSrc="/images/hci.jpg"
                    title="CS3200 Human Computer Interaction"
                    description="User Experience and Interface Design"
                />
                <DashboardCourse
                    id="1150"
                    imageSrc="/images/algebra.jpg"
                    title="MATH1150 Algebra"
                    description="Algebra"
                />
            </div>
        </div>
    );
}
