"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import Link from "next/link";


import { Form, Button } from "react-bootstrap";


export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    //after successful login --->dashboard
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control id="wd-username" placeholder="username" className="mb-2"
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <Form.Control defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password" placeholder="password" type="password" className="mb-2" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>

      <Link id="wd-signup-link" href="/Kambaz/Account/Signup">Sign up</Link>

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
