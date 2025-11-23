"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";
import { Nav, NavItem, NavLink } from "react-bootstrap"

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();
  return (

    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink as={Link} href={link} id={`wd-${link.toLowerCase()}-link`} active={pathname.endsWith(link)}>
            {link}
          </NavLink>
        </NavItem>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink as={Link} href={`/Account/Users`} active={pathname.endsWith('Users')}> Users </NavLink>)}

    </Nav>



  );
}
// import Link from "next/link";
// export default function AccountNavigation() {
//   return (

//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       <Link href="Signin" id="wd-signin-link" className="list-group-item active border-0"> Signin </Link>
//       <Link href="Signup" id="wd-signup-link" className="list-group-item text-danger border-0"> Signup </Link>
//       <Link href="Profile" id="wd-profile-link" className="list-group-item text-danger border-0"> Profile </Link>
//     </div>


//   );

