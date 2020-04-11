import React from "react";
import { Row, Col } from "antd";

function Login() {
  return (
    <Row style={{ height: "100vh" }} justify="center" align="middle">
      <Col>
        <img
          style={{ width: "386px" }}
          alt="logo fakebook"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        />
      </Col>
      <Col>
        <Row>Username</Row>
        <Row>Password</Row>
        <Row>
          <Col>Signup</Col>
          <Col>Login</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Login;
