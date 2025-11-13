"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";
export default function Signup() {
  //const [user, setUser] = useState<any>({});
  // FIX: Initialize with empty strings to make the input 'controlled' immediately
  const [user, setUser] = useState<any>({
    username: "", // MUST be initialized as ""
    password: ""
  });
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Account/Profile");
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl value={user.username}
        onChange={(e) => setUser({
          ...user,
          username: e.target.value
        })} />
      <FormControl value={user.password} type="password"
        onChange={(e) => setUser({
          ...user,
          password: e.target.value
        })} />
      <button onClick={signup}> Sign up </button><br />
      <Link href="/Account/Signin">Sign in</Link>
    </div>);
}

{/*为啥显示的button*/ }



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


