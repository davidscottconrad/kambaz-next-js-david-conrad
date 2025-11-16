"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import * as client from "../client";
import AccountNavigation from "../Navigation";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const dispatch = useDispatch();
    const router = useRouter();

    const signup = async () => {
        const currentUser = await client.signup(user)
        dispatch(setCurrentUser(currentUser));
        router.push("/Account/Profile");
    };

    return (
        <div id="wd-signup-screen" className="container mt-5">
            <AccountNavigation />
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <h3 className="mb-4">Sign up</h3>
                    <Form>
                        <Row className="mb-3">
                            <Col sm={12}>
                                <Form.Control
                                    type="text"
                                    placeholder="username"
                                    className="wd-username"
                                    value={user.username || ""}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    className="wd-password"
                                    value={user.password || ""}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <Form.Control
                                    type="password"
                                    placeholder="verify password"
                                    className="wd-password-verify"
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <Button
                                    variant="primary"
                                    className="w-100"
                                    onClick={signup}
                                >
                                    Sign up
                                </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} className="text-center">
                                <Link href="Signin">Sign in</Link>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}