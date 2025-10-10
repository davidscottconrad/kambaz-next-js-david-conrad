"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";


export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

      {links.map((link) => (
        <Link
          key={link}
          href={`/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border-0 ${pathname.startsWith(`/Courses/${cid}/${link}`) ? "text-dark border-left-2" : "text-danger"
            }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
