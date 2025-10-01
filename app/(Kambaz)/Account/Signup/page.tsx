import Link from "next/link";
import { Form } from "react-bootstrap";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" />
      <Link id="wd-signup-btn" href="/Account/Profile" className="btn btn-primary w-100 mb-2">
        Sign Up </Link><br />
      <Link id="wd-signup-link" href="/Account/Signin">Sign in</Link>
      {/*为啥显示的button*/}



      {/* <input placeholder="username" /><br/>
      <input placeholder="email" /><br/>
      <input placeholder="password" type="password" /><br/>
      <input placeholder="verify password" type="password" /><br/>
      <input type="checkbox" name="check-term-privacy" id="wd-chkbox-term-privacy"/>
            <label htmlFor="wd-chkbox-term-privacy">Terms & Privacy</label><br/>
      <input type="checkbox" name="check-receive-email" id="wd-chkbox-receive-email"/>
            <label htmlFor="wd-chkbox-receive-email">Would you like to receive Marketing emails? </label><br/>
      
      
      <Link href="Profile" > Profile </Link><br />
      <Link href="Signin" >Sign in</Link> */}



    </div>
  );
}


