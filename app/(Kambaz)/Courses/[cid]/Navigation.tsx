"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
export default function CourseNavigation() {
  //useParams: a hook that lets you read dynamic route parameters from the current URL.
  //useParams() gives you an object with info from the URL.
  //For a route like "/ courses / RS101", it returns something like:{ cid: "RS101" }

  //const { cid } = useParams() is just a shortcut to take the
  //cid value out of that object and put it into a variable named cid
  const { cid } = useParams();
  const pathname = usePathname();
  const links = [
    { href: "Home", label: "Home" },
    { href: "Modules", label: "Modules" },
    { href: "Piazza", label: "Piazza" },
    { href: "Zoom", label: "Zoom" },
    { href: "Assignments", label: "Assignments" },
    { href: "Quizzes", label: "Quizzes" },
    { href: "Grades", label: "Grades" },
    { href: "People/Table", label: "People" },
  ];

  return (
    <div className="rounded-0 border-0 list-group">
      {links.map(({ href, label }) => (
        <Link key={href}
          className={`list-group-item ${pathname.endsWith(href) ? "active" : "text-danger border-0"}`}
          href={`/Courses/${cid}/${href}`} >
          {label} </Link>
      ))}
    </div>


    // <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    //   <Link className={`${pathname.endsWith("Home") ? "active"
    //     : "text-danger border-0"} list-group-item`}
    //     href={`/Courses/${cid}/Home`}> Home </Link>
    //   <Link className={`${pathname.endsWith("Modules") ? "active"
    //     : "text-danger border-0"} list-group-item`}
    //     href={`/Courses/${cid}/Modules`}> Modules</Link>
    //   <Link className={`${pathname.endsWith("Modules") ? "active"
    //     : "text-danger border-0"} list-group-item`}
    //     href={`/Courses/${cid}/Piazza`} > Piazza</Link>


    //   <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link"
    //     className="list-group-item text-danger border-0"> Zoom </Link>
    //   <Link href="/Courses/1234/Assignments" id="wd-course-quizzes-link"
    //     className="list-group-item text-danger border-0"> Assignments </Link>
    //   <Link href="/Courses/1234/Quizzes" id="wd-course-assignments-link"
    //     className="list-group-item text-danger border-0"> Quizzes </Link>
    //   <Link href="/Courses/1234/People/Table" id="wd-course-people-link"
    //     className="list-group-item text-danger border-0" > People </Link>
    // </div>

    // <div id="wd-courses-navigation">
    //   <Link href="/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/>
    //   <Link href="/Courses/1234/Modules" id="wd-course-modules-link">Modules</Link><br/>
    //   <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
    //   <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
    //   <Link href="/Courses/1234/Assignments" id="wd-course-quizzes-link">Assignments</Link><br/>
    //   <Link href="/Courses/1234/Quizzes" id="wd-course-assignments-link">Quizzes</Link><br/>
    //   <Link href="/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link><br/>
    //   <Link href="/Courses/1234/People/Table" id="wd-course-people-link">People</Link><br/>
    // </div>
  );
}
