import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
export default function KambazNavigation() {
  return (
    <ListGroup className="rounded-0 position-sticky bottom-0 top-0 d-none d-md-block bg-black z-2 vh-100" style={{ width: 120 }}
      id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a"
        href="/" id="wd-neu-link">
        <Image src="/images/NEU.svg" width={75} height={75} alt="Northeastern University" />
      </ListGroupItem><br />
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem><br />
      <ListGroupItem className="border-0 bg-white text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem><br />
      {/* complete styling the rest of the links */}
    </ListGroup>
  );
}
