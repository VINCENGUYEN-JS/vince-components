import * as React from "react";
import { Row, Col } from "../layout";

const BorderBox = (props: any) => (
  <div
    style={{
      border: "1px solid #ccc",
      backgroundColor: "#92a8d1",
      padding: "10px",
    }}
  >
    {props.children}
  </div>
);

const LayoutExample = () => (
  <>
    <Row>
      <Col span={8}>
        <BorderBox>33%</BorderBox>
      </Col>
      <Col span={8}>
        <BorderBox>33%</BorderBox>
      </Col>
      <Col span={8}>
        <BorderBox>33%</BorderBox>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span={12}>
        <BorderBox>50%</BorderBox>
      </Col>
      <Col span={12}>
        <BorderBox>50%</BorderBox>
      </Col>
    </Row>
  </>
);

export default LayoutExample;
