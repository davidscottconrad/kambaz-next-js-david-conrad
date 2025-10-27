"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";

export default function TOC() {
  const pathname = usePathname(); //for highlighting the active nav item
  const links = [
    { href: "/Labs/Lab1", label: "Lab1", id: "wd-lab1-link" },
    { href: "/Labs/Lab2", label: "Lab2", id: "wd-lab2-link" },
    { href: "/Labs/Lab3", label: "Lab3", id: "wd-lab3-link" },
    { href: "/Labs/Lab4", label: "Lab4", id: "wd-lab4-link" },
    { href: "/", label: "Kambaz", id: "wd-kambaz-link" },
    { href: "https://github.com/jichunling", label: "My GitHub", id: "wd-github-link" }
  ]

  return (
    <Nav variant="pills"> {/*styling option makes the links look like rounded “pills” */}
      {links.map((link) => (
        <NavItem key={link.id}> {/*Helps React efficiently update lists. Not part of the rendered DOM*/}
          <NavLink as={Link}
            className={pathname.endsWith(link.href) ? "active" : ""}
            href={link.href}
            id={link.id}>    {/*Identifies an element in the HTML document. it appears in the DOM.*/}
            {link.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
    //  <ul>
    //    <li>
    //      <Link href="/Labs" id="wd-lab1-link">
    //        Home </Link> </li>
    //    <li>
    //      <Link href="/Labs/Lab1" id="wd-lab1-link">
    //        Lab 1 </Link> </li>
    //    <li>
    //      <Link href="/Labs/Lab2" id="wd-lab2-link">
    //        Lab 2 </Link> </li>
    //    <li>
    //      <Link href="/Labs/Lab3" id="wd-lab3-link">
    //        Lab 3 </Link> </li> 
    //    <li>
    //      <Link href="/" id="wd-lab3-link">
    //        Kambaz </Link> </li> </ul>

    // <Nav variant="pills">
    //   <NavItem>
    //     <NavLink href="/Labs" as={Link}>Labs</NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink href="/Labs/Lab1" as={Link}>Lab 1</NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink href="/Labs/Lab2" as={Link}>Lab 2</NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink href="/Labs/Lab3" as={Link}>Lab 3</NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink href="/" as={Link}>Kambaz</NavLink> jga
    //   </NavItem>
    //   <NavItem>
    //     <NavLink href="https://github.com/jichunling">My GitHub</NavLink>
    //   </NavItem>
    // </Nav>


    // <Nav variant="pills" id="wd-toc">
    //   <NavItem>
    //     <NavLink as={Link} href="/Labs/Lab1" id="wd-a1" active={pathname.includes("Lab1")}>
    //       Lab 1
    //     </NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink as={Link} href="/Labs/Lab2" id="wd-a2" active={pathname.includes("Lab2")}>
    //       Lab 2
    //     </NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink as={Link} href="/Labs/Lab3" id="wd-a3" active={pathname.includes("Lab3")}>
    //       Lab 3
    //     </NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink as={Link} href="/Kambaz" id="wd-a4">
    //       Kambaz
    //     </NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink href="https://github.com/jichunling" target="_blank" rel="noopener noreferrer">
    //       My GitHub
    //     </NavLink>
    //   </NavItem>
    // </Nav>






  );
}
