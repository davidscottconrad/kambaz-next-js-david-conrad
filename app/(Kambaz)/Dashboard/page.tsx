"use client"

import { useState } from "react"
import Link from "next/link";
import * as db from "../Database";
import { FormControl, Col, Row, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/[cid]/reducer";


export default function Dashboard() {
  //之后再补上下面两行！！！！！！！！！！！！！！
  //const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const { enrollments } = db;

  //the main array that holds the entire list of data
  //【global state】
  //any: tells the TypeScript compiler: "Treat this value as if it could be any possible type, and don't bother checking it."
  const { courses } = useSelector((state: any) => state.coursesReducer);
  //The useSelector hook receives the entire Redux store state object as its argument (the variable named 'state').

  const dispatch = useDispatch();

  //the main array that holds the entire list of data
  //const [courses, setCourses] = useState<any[]>(db.courses);//initial value: db.courses

  //a single object that holds the data for one specific course.
  //【local state】: 因为只有在这个component add/update course的时候才需要，
  // 而courses是整个application都需要的
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });


  //implement an event handler to create new courses
  // const addNewCourse = () => {
  //   //create new instand of "Course" : newCourse
  //   const newCourse = { ...course, _id: uuidv4() };//keep all the default value but override the primary key (id)
  //   setCourses([...courses, newCourse]); //append the newCourse we just created at the end of the array
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // //loop over the courses array and update the one we editted
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };



  //use the dispatch variable to send an action when an event occurs
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))} > Add </button> {/*calling function with no argument syntax */}
        <button className="btn btn-warning float-end me-2"
          onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update
        </button>

      </h5><br />

      {/*input element for each of fields in course state variable; 
      Updat fields by using the setCourse mutator function
      { ...course, name: e.target.value } keep all the other filed of the course, but override the name*/}
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl as="textarea" value={course.description} rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />


      <h2 id="wd-dashboard-published">Published Courses({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .map((course: any) => (
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

                      {/* (1) Delete button to invoke the deleteCourse event handler 
                        (2) "event.preventDefault()": stops the browser's default action from occurring when the event is triggered.
                        All the Cards are embedded inside Link, so the "card" is a hyperlink.
                        If you click anywhere inside the card, it's call navigation navigate to the course
                        (3) A Closure is created when an inner function (the onClick handler) is defined 
                        within an outer function's(map function) scope. 
                        The inner function retains access to the variables of the outer function's 
                        scope even after the outer function has finished executing.*/}

                      <button onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>

                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>


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
