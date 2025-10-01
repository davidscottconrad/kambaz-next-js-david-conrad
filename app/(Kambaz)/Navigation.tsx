import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineRead, AiOutlineCalendar, AiOutlineExperiment, AiOutlineMail } from 'react-icons/ai';

import Link from "next/link";

export default function KambazNavigation() {
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
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <ListGroupItem className="border-0 bg-white text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      {/* complete styling the rest of the links */}
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Courses" id="wd-Courses-link" className="text-white text-decoration-none">
          <AiOutlineRead className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>
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
      </ListGroupItem>

    </ListGroup>
  );
}



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
