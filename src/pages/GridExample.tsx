import * as React from "react";
import { Row, Col } from "../layout";
import Divider from "../components/Divider/Divider";

const BorderBox = (props: any) => (
  <div
    style={{
      border: "1px solid #ccc",
      backgroundColor: "rgb(0, 146, 255)",
      padding: "10px",
    }}
  >
    {props.children}
  </div>
);

const GridExample = () => (
  <section className="markdown">
    <h1>Grid</h1>
    <p>24 Grids System</p>
    <h2>Examples</h2>
    <Divider>Horizontal</Divider>
    <Row>
      <Col span={8}>
        <BorderBox>Col 8</BorderBox>
      </Col>
      <Col span={8}>
        <BorderBox>Col 8</BorderBox>
      </Col>
      <Col span={8}>
        <BorderBox>Col 8</BorderBox>
      </Col>
    </Row>
    <Divider></Divider>
    <Row>
      <Col span={12}>
        <BorderBox>Col 12</BorderBox>
      </Col>
      <Col span={12}>
        <BorderBox>Col 12</BorderBox>
      </Col>
    </Row>
    <Divider>Layout with gutter</Divider>
    <Row gutter={16}>
      <Col span={12}>
        <BorderBox>Col 12</BorderBox>
      </Col>
      <Col span={12}>
        <BorderBox>Col 12</BorderBox>
      </Col>
    </Row>
    <Divider>
      Layout with responsive gutter xs: 8, sm: 16, md: 24, lg: 32{" "}
    </Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={12}>
        <BorderBox>Col 12</BorderBox>
      </Col>
      <Col span={12}>
        <BorderBox>Col 12</BorderBox>
      </Col>
    </Row>
  </section>
);

export default GridExample;
