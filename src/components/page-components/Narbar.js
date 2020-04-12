import React from "react";
import { Row, Col, Avatar } from "antd";
import FakebookLogo from "../../resources/logo-fakebook.png";

function Narbar() {
  return (
    <div style={{ height: "42px", backgroundColor: "#4267b2" }}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}></Col>
        <Col xs={4} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <img
            alt="small-fakebook"
            src={FakebookLogo}
            style={{ height: "42px" }}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}></Col>
        <Col xs={8} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Row
            style={{ height: "100%", color: "white" }}
            justify="center"
            align="middle"
          >
            <Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={3}>
              <Avatar size={24} />
            </Col>
            <Col xs={0} sm={1} md={1} lg={1} xl={1} xxl={0}></Col>
            <Col xs={14} sm={16} md={19} lg={19} xl={17} xxl={17}>
              <Row>
                <strong style={{ fontSize: "12px" }}>
                  Nuttchai Kulthammanit
                </strong>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={0} md={0} lg={4}></Col>
      </Row>
    </div>
  );
}

export default Narbar;
