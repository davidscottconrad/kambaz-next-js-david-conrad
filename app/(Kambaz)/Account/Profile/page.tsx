import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <label htmlFor="wd-username">Username:</label><br />
      <input
        id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
        type="text"
      /><br /><br />

      <label htmlFor="wd-password">Password:</label><br />
      <input
        id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
      /><br /><br />

      <label htmlFor="wd-firstname">First Name:</label><br />
      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
      /><br /><br />

      <label htmlFor="wd-lastname">Last Name:</label><br />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
      /><br /><br />

      <label htmlFor="wd-dob">Date of Birth:</label><br />
      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
      /><br /><br />

      <label htmlFor="wd-email">Email:</label><br />
      <input
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
      /><br /><br />

      <label htmlFor="wd-role">Role:</label><br />
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br /><br />

      <Link href="Signin">Sign out</Link>
    </div>
  );
}