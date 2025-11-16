"use client";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import Link from "next/link";
import AccountNavigation from "../Navigation";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as client from "../client";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({ username: "", password: "" });
  const dispatch = useDispatch();

  const signin = async () => {
    const user = await client.signin(credentials);
    console.log("Signed in user:", user);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
      <AccountNavigation />
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h3 className="mb-4">Sign in</h3>
          <Form>
            <Row className="mb-3">
              <Col sm={12}>
                <Form.Control
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                  className="mb-2"
                  placeholder="username"
                  id="wd-username"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <Form.Control
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  className="mb-2"
                  placeholder="password"
                  type="password"
                  id="wd-password"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <Button
                  onClick={signin}
                  id="wd-signin-btn"
                  className="w-100"
                  variant="primary"
                >
                  Sign in
                </Button>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className="text-center">
                <Link id="wd-signup-link" href="/Kambaz/Account/Signup">
                  Sign up
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

