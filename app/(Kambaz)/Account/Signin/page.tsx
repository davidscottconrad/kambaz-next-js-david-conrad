import Link from "next/link";
import { Form } from "react-bootstrap";


export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" />
      <Link id="wd-signin-btn" href="/Account/Profile" className="btn btn-primary w-100 mb-2">
        Sign in </Link><br />
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>

      {/* <input placeholder="username" /> <br />
     <input placeholder="password" type="password" />
     <br />
     <input type="checkbox" name="check-remember" id="wd-chkbox-remember"/>
            <label htmlFor="wd-chkbox-remember">Remember me</label><br/>  
     <Link href="/ForgetPassword"> Forget Password </Link> <br />
     <Link href="/Profile"> Sign in </Link> <br />
     <Link href="Signup"> Sign up </Link> */}
    </div>
  );
}
