import Link from "next/link";
import * as db from "../Database";
import { Col, Row, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="/images/reactjs.jpg"
                    variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    {/*text-nowrap:Keeps the text on a single line */}
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div></div>);
}


//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link href="/Courses/6180/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <CardImg variant="top" src="/images/genAI.jpeg" width="100%" height={160} />
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6180 Foundation of Gen AI</CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Generative AI is everywhere</CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link href="/Courses/5200/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <CardImg variant="top" src="/images/database.jpeg" width="100%" height={160} />
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5200 Database Management</CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     SQL or NOSQL</CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>


//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link href="/Courses/5800/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <CardImg variant="top" src="/images/algorithm.png" width="100%" height={160} />
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5800 Algorithm</CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Ste by Step</CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link href="/Courses/5520/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <CardImg variant="top" src="/images/MobileApp.png" width="100%" height={160} />
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5520 Mobile Application Development</CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Android or IOS?</CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link href="/Courses/5002/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <CardImg variant="top" src="/images/DiscreteMath.jpeg" width="100%" height={160} />
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5002 Discrete Math</CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     I love Discrete Math</CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link href="/Courses/5004/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark">
//                 <CardImg variant="top" src="/images/OOP.png" width="100%" height={160} />
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5004 Object Oriented Programming</CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Hello OOP</CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>
//         </Row>

//         {/* <div className="wd-dashboard-course">
//           <Link href="/Courses/1234" className="wd-dashboard-course-link">
//             <Image src="/images/reactjs.jpg" alt="" width={200} height={150} />
//             <div>
//               <h5> CS5610 React JS </h5>
//               <p className="wd-dashboard-course-title">
//                 Full Stack software developer</p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/6180" className="wd-dashboard-course-link">
//             <Image src="/images/genAI.jpeg" alt="" width={200} height={150} />
//             <div>
//               <h5> CS6180 Foundation of Generative AI </h5>
//               <p className="wd-dashboard-course-title">
//                 Generative AI is everywhere</p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/5200" className="wd-dashboard-course-link">
//             <Image src="/images/database.jpeg" alt="" width={200} height={150} />
//             <div>
//               <h5> CS5200 Database Management </h5>
//               <p className="wd-dashboard-course-title">
//                 SQL or NOSQL</p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>
//        <div className="wd-dashboard-course">
//           <Link href="/Courses/5800" className="wd-dashboard-course-link">
//             <Image src="/images/algorithm.png" alt="" width={200} height={150} />
//             <div>
//               <h5> CS5800 Algorithm </h5>
//               <p className="wd-dashboard-course-title">
//                 Learn Algorithm First</p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/5520" className="wd-dashboard-course-link">
//             <Image src="/images/MobileApp.png" alt=""width={200} height={150} />
//             <div>
//               <h5> CS5520 Mobile Application Development </h5>
//               <p className="wd-dashboard-course-title">
//                 Android or IOS?</p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/5002" className="wd-dashboard-course-link">
//             <Image src="/images/DiscreteMath.jpeg" alt="" width={200} height={150} />
//             <div>
//               <h5> CS5002 Discrete Math </h5>
//               <p className="wd-dashboard-course-title">
//                 I love DiscreteMath</p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/5004" className="wd-dashboard-course-link">
//             <Image src="/images/OOP.png" alt="" width={200} height={150} />
//             <div>
//               <h5> CS5004 Object Oriented Programming </h5>
//               <p className="wd-dashboard-course-title">
//                 Hello OOP</p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// } 
