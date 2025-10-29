"use client";
import { ReactNode, useEffect } from "react";
import CourseNavigation from "./Navigation";
// import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments: any[] = useSelector(
    (state: any) => state.enrollments?.enrollments ?? []
  );
  const router = useRouter();

  useEffect(() => {
    if (!cid) return;
    const enrolled =
      !!currentUser &&
      enrollments.some((e: any) => e.user === currentUser._id && e.course === cid);
    if (!enrolled) router.replace("/Dashboard");
  }, [currentUser, enrollments, cid, router]);

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