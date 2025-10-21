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
          className={`list-group-item ${pathname.startsWith(`/Courses/${cid}/${link}`) ? "active" : "text-danger  border-0"
            }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
