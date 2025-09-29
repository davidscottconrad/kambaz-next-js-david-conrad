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

  return (
    <ListGroup
      className="rounded-0 position-sticky bottom-0 top-0 d-none d-md-block bg-black z-2 vh-100"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      {/* Logo */}
      <ListGroupItem
        className="bg-black border-0 text-center"
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


      {/* Account */}
      <ListGroupItem
        className={`border-0 text-center ${pathname.startsWith("/Account") ? "bg-white" : "bg-black"
          }`}
        active={pathname.startsWith("/Account")}
      >
        <Link
          href="/Account/Signin"
          id="wd-account-link"
          className={`d-block text-decoration-none ${pathname.startsWith("/Account") ? "text-danger" : "text-white"
            }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${pathname.startsWith("/Account") ? "text-danger" : "text-white"
              }`}
          />

          Account
        </Link>
      </ListGroupItem>


      <ListGroupItem
        className={`border-0 text-center ${pathname.startsWith("/Dashboard") || pathname.startsWith("/Courses") ? "bg-white" : "bg-black"
          }`}
        active={pathname.startsWith("/Dashboard") || pathname.startsWith("/Courses") || pathname.startsWith("/Courses")}
      >
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className={`d-block text-decoration-none ${pathname.startsWith("/Dashboard") || pathname.startsWith("/Courses") ? "text-danger" : "text-white"
            }`}
        >
          <AiOutlineDashboard
            className={`fs-1 ${pathname.startsWith("/Dashboard") || pathname.startsWith("/Courses") ? "text-danger" : "text-white"
              }`}
          />

          Dashboard
        </Link>
      </ListGroupItem>


      <ListGroupItem
        className={`border-0 text-center ${pathname === "/Calendar" ? "bg-white" : "bg-black"
          }`}
        active={pathname === "/Calendar"}
      >
        <Link
          href="/Calendar"
          id="wd-calendar-link"
          className={`d-block text-decoration-none ${pathname === "/Calendar" ? "text-danger" : "text-white"
            }`}
        >
          <IoCalendarOutline
            className={`fs-1 ${pathname === "/Calendar" ? "text-danger" : "text-white"
              }`}
          />

          Calendar
        </Link>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center ${pathname === "/Inbox" ? "bg-white" : "bg-black"
          }`}
        active={pathname === "/Inbox"}
      >
        <Link
          href="/Inbox"
          id="wd-inbox-link"
          className={`d-block text-decoration-none ${pathname === "/Inbox" ? "text-danger" : "text-white"
            }`}
        >
          <FaInbox
            className={`fs-1 ${pathname === "/Inbox" ? "text-danger" : "text-white"
              }`}
          />

          Inbox
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${pathname === "/Settings" ? "bg-white" : "bg-black"
          }`}
        active={pathname === "/Settings"}
      >
        <Link
          href="/Settings"
          id="wd-settings-link"
          className={`d-block text-decoration-none ${pathname === "/Settings" ? "text-danger" : "text-white"
            }`}
        >
          <LiaCogSolid
            className={`fs-1 ${pathname === "/Settings" ? "text-danger" : "text-white"
              }`}
          />

          Settings
        </Link>
      </ListGroupItem>
      <ListGroupItem
        className={`border-0 text-center ${pathname === "/Settings" ? "bg-white" : "bg-black"
          }`}
        active={pathname === "/Settings"}
      >
        <Link
          href="/Labs"
          id="wd-labs-link"
          className={`d-block text-decoration-none ${pathname === "/Labs" ? "text-danger" : "text-white"
            }`}
        >
          <LiaBookSolid
            className={`fs-1 ${pathname === "/Labs" ? "text-danger" : "text-white"
              }`}
          />

          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
