"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUserCircle, FaCalendarAlt } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineRead, AiOutlineCalendar, AiOutlineExperiment, AiOutlineMail } from 'react-icons/ai';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md"; // Material Design
import { FaBookDead } from "react-icons/fa";
import { CiBeaker1 } from "react-icons/ci";

export default function KambazNavigation() {
  const pathname = usePathname();//for highlighting the active nav item
  const links = [
    { href: "/Account", label: "Account", icon: FaRegUserCircle },
    { href: "/Dashboard", label: "Dashboard", icon: MdSpaceDashboard },
    { href: "/Dashboard", label: "Courses", icon: FaBookDead },
    { href: "/Calendar", label: "Calendar", icon: FaCalendarAlt },
    { href: "/Inbox", label: "Inbox", icon: FaRegUserCircle },
    { href: "/Labs", label: "Labs", icon: CiBeaker1 },
  ];

  return (
    //d-none d-md-block - applies display: none so that the element is initially hidden. 
    // And then applies display:
    // block to display the element when the screen width reaches mid sized screens
    //z-index: 2 which brings the element above other elements with a lower z-index.

    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
      id="wd-kambaz-navigation">

      <ListGroupItem className="bg-black border-0 text-center" as="a"
        target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>


      {/* renaming icon to Icon*/}
      {/* as={Link}: client - side navigation — no full reload.The transition feels smooth and fast.*/}
      {links.map(({ href, label, icon: Icon }) => (

        <ListGroupItem key={`${href}-${label}`} as={Link} href={href}
          className={`${pathname.includes(label) ? "bg-white text-danger"
            : "bg-black text-white"} text-center border-0`} >
          {/* React treats capitalized identifiers as components*/}
          {/* If you kept it lowercase (icon), <icon /> would be treated as a DOM tag*/}
          <Icon className="fs-1 text-danger" /> <br />
          {label}
        </ListGroupItem>
      ))}

    </ListGroup>
  );
}



{/* <ListGroupItem as={Link} href="/Account" className={`text-center border-0
        ${pathname.includes("/Account") ? "bg-white text-danger" : "bg-black text-white"}`} >
        <FaRegUserCircle className="fs-1 text-danger" /> <br /> Account </ListGroupItem>

      <ListGroupItem as={Link} href="/Dashboard" className={`text-center border-0
        ${pathname.includes("/Dashboard") ? "bg-white text-danger" : "bg-black text-white"} `} >
        <MdSpaceDashboard className="fs-1 text-danger" /> <br /> Dashboard </ListGroupItem>
      <ListGroupItem as={Link} href="/Dashboard" className={`text-center border-0
        ${pathname.includes("/Courses") ? "bg-white text-danger" : "bg-black text-white"}`} >
        <FaBookDead className="fs-1 text-danger" /> <br /> Courses </ListGroupItem>


      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Calendar" id="wd-Calendar-link" className="text-white text-decoration-none">
          <AiOutlineCalendar className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Inbox" id="wd-Inbox-link" className="text-white text-decoration-none">
          <AiOutlineMail className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Labs" id="wd-Labs-link" className="text-white text-decoration-none">
          <AiOutlineExperiment className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem> */}




// import Link from "next/link";
// export default function KambazNavigation() {
//   return (
//     <div id="wd-kambaz-navigation">
//       <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
//         Northeastern</a><br/>
//       <Link href="/Account" id="wd-account-link">Account</Link><br/>
//       <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
//       <Link href="/Dashboard" id="wd-course-link">Courses</Link><br/>
//       <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br/>
//       <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br/>
//       <Link href="/Labs" id="wd-labs-link">Labs</Link><br/>
//     </div>
// );}
