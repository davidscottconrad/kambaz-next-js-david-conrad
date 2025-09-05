import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/reactjs.png" width={200} height={150} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer{" "}
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/Courses/2101" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/algorithms.jpg" width={200} height={150} />
                        <div>
                            <h5> CS2101 Algorithms </h5>
                            <p className="wd-dashboard-course-title">
                                Algorithms
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/3550" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/astrophysics.jpg" width={200} height={150} />
                        <div>
                            <h5> PH3550 Astrophysics </h5>
                            <p className="wd-dashboard-course-title">
                                Astrophysics
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1210" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/geometry.jpg" width={200} height={150} />
                        <div>
                            <h5> MATH1210 Geometry </h5>
                            <p className="wd-dashboard-course-title">
                                Geometry
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/2315" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/discrete-math.jpg" width={200} height={150} />
                        <div>
                            <h5> MATH2315 Discrete Mathematics </h5>
                            <p className="wd-dashboard-course-title">
                                Discrete Mathematics
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/4100" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/ai.jpg" width={200} height={150} />
                        <div>
                            <h5> CS4100 Artificial Intelligence </h5>
                            <p className="wd-dashboard-course-title">
                                AI Class
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/3200" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/hci.jpg" width={200} height={150} />
                        <div>
                            <h5> CS3200 Human Computer Interaction </h5>
                            <p className="wd-dashboard-course-title">
                                User Experience and Interface Design
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1150" className="wd-dashboard-course-link">
                        <Image alt="course-img" src="/images/algebra.jpg" width={200} height={150} />
                        <div>
                            <h5> MATH1150 Algebra </h5>
                            <p className="wd-dashboard-course-title">
                                Algebra
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
