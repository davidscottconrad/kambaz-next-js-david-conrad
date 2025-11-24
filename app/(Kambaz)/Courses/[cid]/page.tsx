"use client"
//import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa";
import { useParams, useLocation } from "react-router";
import { useSelector } from "react-redux";
import * as client from "../client"

export default function Courses() {
  //useParams: a hook that lets you read dynamic route parameters from the current URL.
  //useParams() gives you an object with info from the URL.
  //For a route like "/ courses / RS101", it returns something like:{ cid: "RS101" }
  //const { cid } = useParams() is just a shortcut to take the 
  //cid value out of that object and put it into a variable named cid

  const { cid } = useParams(); //the curly braces mean you’re using object destructuring.
  //const course = courses.find((course: any) => course._id === cid);
  const { courses } = useSelector((state: any) => state.coursesReducer);//get from rudex
  const currentCourse = courses.find((course: any) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {currentCourse && currentCourse.name} &gt; {pathname.split("/")[4]}

      </h2>
    </div>
  );
}
