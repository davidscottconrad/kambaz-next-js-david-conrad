"use client";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import * as Fa from 'react-icons/fa';
import { courses } from "../../Database";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();//allows your component to read dynamic parameters embedded directly in the current URL
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <Fa.FaAlignJustify className="me-4 fs-4 mb-1" />
        {/* adding the Optional Chaining operator (?.)
is a safe guard that prevents a JavaScript crash (runtime error) 
if the course object is ever null or undefined when the component renders. */}
        {course?.name} </h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div></div>

    </div>
  );
}
