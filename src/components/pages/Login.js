import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

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
        <Form {...formItemLayout}>
          <Row>
            <Form.Item label="Username" name="username">
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Password" name="password">
              <Input.Password />
            </Form.Item>
          </Row>
          <Row justify="space-around">
            <Col>
              <Link to="/signup">
                <Button type="link">Signup</Button>
              </Link>
            </Col>
            <Col>
              <Button htmlType="submit" type="primary">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
