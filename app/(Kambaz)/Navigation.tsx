"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Courses/RS102/Home", icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      className="rounded-0 position-sticky bottom-0 top-0 d-none d-md-block bg-black z-2 vh-100"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >

      <ListGroupItem
        className="bg-black border-0 d-flex flex-col justify-content-center  mb-2 text-center "
        as="a"
        href="/"
        id="wd-neu-link"
      >
        <Image
          src="/images/NEU.svg"
          width={75}
          height={75}
          alt="Northeastern University"
        />
      </ListGroupItem>


      <ListGroupItem
        className={`border-0 d-flex flex-col justify-content-center mt-2 mb-2 text-center  ${pathname.startsWith("/Account") ? "bg-white" : "bg-black"
          }`}
        active={pathname.startsWith("/Account")}
      >
        <Link
          href="/Account"
          id="wd-account-link"
          className={`d-block text-decoration-none ${pathname.startsWith("/Account") ? "text-danger" : "text-white"
            }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${pathname.startsWith("/Account") ? "text-danger" : "text-white"
              }`}
          />

          <div>Account</div>
        </Link>
      </ListGroupItem>

      {links.map(({ label, path, icon: Icon }) => {

        const isCourses = path.startsWith("/Courses");
        const isActive = isCourses
          ? pathname.startsWith("/Courses/")
          : pathname === path || pathname.startsWith(`${path}/`);

        return (
          <ListGroupItem
            key={path}
            className={`border-0 d-flex flex-col justify-content-center mt-2 mb-2 text-center ${isActive ? "bg-white" : "bg-black"
              }`}
            active={isActive}
          >
            <Link
              href={path}
              className={`d-block text-decoration-none ${isActive ? "text-danger" : "text-white"
                }`}
            >
              <Icon className={`fs-1 ${isActive ? "text-danger" : "text-white"}`} />
              <div>{label}</div>
            </Link>
          </ListGroupItem>
        );
      })}

    </ListGroup>
  );
}
