import * as React from "react";
import { Row, Col } from "../layout";
import Divider from "../components/Divider/Divider";

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
    <Divider>33-33-33</Divider>
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
    <Divider>50-50</Divider>
    <Row>
      <Col span={12}>
        <BorderBox>50%</BorderBox>
      </Col>
      <Col span={12}>
        <BorderBox>50%</BorderBox>
      </Col>
    </Row>
    <Divider>Layout with gutter</Divider>
    <Row gutter={16}>
      <Col span={12}>
        <BorderBox>50%</BorderBox>
      </Col>
      <Col span={12}>
        <BorderBox>50%</BorderBox>
      </Col>
    </Row>
    <Divider>Layout with responsive gutter</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
