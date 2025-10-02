import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";
import AccountNavigation from "../Navigation";
export default function Signin() {
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
                  type="text"
                  placeholder="username"
                  className="wd-username"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <Form.Control
                  type="password"
                  placeholder="password"
                  className="wd-password"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <Link href="/Dashboard" passHref legacyBehavior>
                  <Button
                    id="wd-signin-btn"
                    variant="primary"
                    className="w-100"
                  >
                    Sign in
                  </Button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className="text-center">
                <Link id="wd-signup-link" href="Signup">Sign up</Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}