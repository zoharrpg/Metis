import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Login = (props) => {
  //TODO fix this login page
  return (
    <div className="container-fluid">
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue="email@example.com"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
