"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
// import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);
  return (
    <div id="wd-courses">

      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        <Breadcrumb course={course} />
      </h2>
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