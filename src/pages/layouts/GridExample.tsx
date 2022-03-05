import * as React from "react";

import ComponentDoc from "template/ComponentDoc";
import { Row, Col } from "layout";
import Divider from "components/Divider/Divider";
import { gridAPI } from "pages/componentApi";

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

const gridCode = `<Row>
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

<Row gutter={16}>
  <Col span={12}>
    <BorderBox>Col 12</BorderBox>
  </Col>
  <Col span={12}>
    <BorderBox>Col 12</BorderBox>
  </Col>
 </Row>

<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col span={12}>
    <BorderBox>Col 12</BorderBox>
   </Col>
   <Col span={12}>
    <BorderBox>Col 12</BorderBox>
   </Col>
</Row>`;

const GridExample = () => (
  <>
    <ComponentDoc
      title="Grid"
      introduction="24 Grids"
      api={gridAPI}
      code={gridCode}
    >
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
    </ComponentDoc>
  </>
);

export default GridExample;
