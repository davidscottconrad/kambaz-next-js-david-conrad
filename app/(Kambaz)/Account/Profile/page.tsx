import Link from "next/link";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>

      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <Form.Control id="wd-password" placeholder="123" type="password" className="mb-2" />
      <Form.Control id="wd-firstName" placeholder="Alice" className="mb-2" />
      <Form.Control id="wd-lastName" placeholder="Wonderland" className="mb-2" />
      <Form.Control id="wd-date" type="date" className="mb-2" />
      <Form.Control id="wd-email" placeholder="alice@@wonderland" type="email" className="mb-2" />
      <Form.Control id="wd-role" placeholder="user" className="mb-2" />
      <Link id="wd-signup-btn" href="/Account/Profile" className="btn btn-primary w-100 mb-2">
        Signout </Link>


      {/* <h3>Profile</h3>
      <img id="wd-defaultProfileImage" src="/images/defaultProfileImage.jpg" 
      alt="Profile photo"
      width={56}
      height={56}
      className="rounded-full object-cover" /><br/>

      <input defaultValue="alice" placeholder="username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <select defaultValue="Undergraduate" id="wd-role">
        <option value="Undergraduate">Undergraduate</option>
        <option value="Graduate">Graduate</option>
      </select><br/>
      
      <Link href="Signin" > Sign out </Link> */}
    </div>
  );
}
