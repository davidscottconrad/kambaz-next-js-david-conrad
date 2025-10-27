"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();
  return (
    <ul className="list-group">
      {links.map((link) => (
        <li
          key={link}
          className={`list-group-item ${pathname.includes(link.toLowerCase()) ? "active" : ""}`}
        >
          {/* Link to the respective path (e.g., /Account/Profile) */}
          <Link
            href={`/Account/${link}`}
            className="text-decoration-none"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
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
// }
