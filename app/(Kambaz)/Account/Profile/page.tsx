import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h3 className="mb-4">Profile</h3>
          <Form>
            <Row className="mb-3">
              <Form.Label column sm={3} htmlFor="wd-username">
                Username:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  id="wd-username"
                  type="text"
                  defaultValue="alice"
                  placeholder="username"
                  className="wd-username"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3} htmlFor="wd-password">
                Password:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  id="wd-password"
                  type="password"
                  defaultValue="123"
                  placeholder="password"
                  className="wd-password"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3} htmlFor="wd-firstname">
                First Name:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  id="wd-firstname"
                  type="text"
                  defaultValue="Alice"
                  placeholder="First Name"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3} htmlFor="wd-lastname">
                Last Name:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  id="wd-lastname"
                  type="text"
                  defaultValue="Wonderland"
                  placeholder="Last Name"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3} htmlFor="wd-dob">
                Date of Birth:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  id="wd-dob"
                  type="date"
                  defaultValue="2000-01-01"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3} htmlFor="wd-email">
                Email:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  id="wd-email"
                  type="email"
                  defaultValue="alice@wonderland"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label column sm={3} htmlFor="wd-role">
                Role:
              </Form.Label>
              <Col sm={9}>
                <Form.Select id="wd-role" defaultValue="FACULTY">
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </Form.Select>
              </Col>
            </Row>

            <Row>
              <Col sm={12} className="text-center">
                <Link href="Signin">Sign out</Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}