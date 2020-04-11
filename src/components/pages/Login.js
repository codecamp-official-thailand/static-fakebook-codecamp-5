import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

function Login() {
  function onFinish(values) {
    console.log(values);
  }

  return (
    <Row style={{ height: "100vh" }} justify="center" align="middle">
      <Col xs={15} sm={7} md={9} lg={7} xl={6} xxl={5}>
        <img
          style={{ width: "100%" }}
          alt="logo fakebook"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        />
      </Col>
      <Col xs={0} sm={2} md={2} lg={2} xl={2} xxl={2}></Col>
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
        <Form onFinish={onFinish} {...formItemLayout}>
          <Row>
            <Form.Item
              style={{ width: "100%" }}
              label="Username"
              name="username"
              rules={[
                { required: true, message: "กรุณากรอก Username ด้วยนะจ๊ะ" },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              style={{ width: "100%" }}
              label="Password"
              name="password"
              rules={[
                { required: true, message: "กรุณากรอก Password ด้วยแหนะ" },
              ]}
            >
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
