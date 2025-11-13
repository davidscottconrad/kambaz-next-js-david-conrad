"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
//import * as db from "../../Database";  That is the local DB
import Link from "next/link";
import * as client from "../client";
import { Form, Button } from "react-bootstrap";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  //using local db:
  //const signin = () => {
  // const user = db.users.find(
  //   (u: any) => u.username === credentials.username && u.password === credentials.password);

  const signin = async () => { //async makes the function return a Promise
    const user = await client.signin(credentials)
    //await pauses the function until the Promise settles and then gives you its resolved value
    if (!user) return;
    dispatch(setCurrentUser(user));
    //after successful login --->Dashboard
    redirect("/Dashboard");
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

      <Link id="wd-signup-link" href="/Account/Signup">Sign Up</Link>

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
