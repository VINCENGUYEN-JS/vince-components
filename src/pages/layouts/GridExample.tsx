import * as React from 'react';

import ComponentDoc from '../../template/ComponentDoc';
import { gridAPI } from '../../pages/componentApi';
import { Divider, Row, Col } from '@vince-components';

const BorderBox = (props: any) => (
  <div
    style={{
      border: '1px solid #ccc',
      backgroundColor: 'rgb(0, 146, 255)',
      padding: '10px',
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
</Row>

<Row>
  <Col span={6}>
    <BorderBox>Col 6</BorderBox>
  </Col>
  <Col span={6} offset={6}>
    <BorderBox>Col 6</BorderBox>
  </Col>
</Row>`;

const gridCodePart2 = `<Row justify="start | center | end | space-around | space-between">
  <Col span={4}>
    <BorderBox>Col 4</BorderBox>
  </Col>
  <Col span={4}>
    <BorderBox>Col 4</BorderBox>
  </Col>
  <Col span={4}>
    <BorderBox>Col 4</BorderBox>
  </Col>
</Row>
`;

const gridCodePart3 = `
<Row>
  <Col span={6}>
    <BorderBox>Col 6</BorderBox>
  </Col>
  <Col span={6} offset={6}>
    <BorderBox>Col 6</BorderBox>
  </Col>
</Row>

<Row gutter={[12, 12]}>
  <Col span={12}>
    <BorderBox>First Name</BorderBox>
  </Col>
  <Col span={12}>
    <BorderBox>Last Name</BorderBox>
  </Col>
  <Col span={18}>
    <BorderBox>Email</BorderBox>
  </Col>
  <Col span={24}>
    <BorderBox>Street Address</BorderBox>
  </Col>
  <Col span={8}>
    <BorderBox>City</BorderBox>
  </Col>
  <Col span={8}>
    <BorderBox>State</BorderBox>
  </Col>
  <Col span={8}>
    <BorderBox>Zip Code</BorderBox>
  </Col>
</Row>

<Row>
  <Col span={12}>
    <BorderBox>First Name</BorderBox>
  </Col>
  <Col span={12}>
    <BorderBox>Last Name</BorderBox>
  </Col>
</Row>
<Row>
  <Col span={18}>
   <BorderBox>Email</BorderBox>
   </Col>
</Row>
<Row>
  <Col span={4}>
    <BorderBox>Street Address</BorderBox>
  </Col>
</Row>
<Row>
  <Col span={8}>
    <BorderBox>City</BorderBox>
  </Col>
  <Col span={8}>
    <BorderBox>State</BorderBox>
  </Col>
  <Col span={8}>
    <BorderBox>Zip Code</BorderBox>
  </Col>
</Row>
`;

const GridExample = () => (
  <>
    <ComponentDoc title="Grid" introduction="24 Grids" code={gridCode}>
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
        Layout with responsive gutter xs: 8, sm: 16, md: 24, lg: 32
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
    <ComponentDoc code={gridCodePart2}>
      <Divider>Start</Divider>
      <Row justify="start">
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
      </Row>
      <Divider></Divider>
      <Divider>Center</Divider>
      <Row justify="center">
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
      </Row>
      <Divider></Divider>
      <Divider>End</Divider>
      <Row justify="end">
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
      </Row>
      <Divider></Divider>
      <Divider>Space-around</Divider>
      <Row justify="space-around">
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
      </Row>
      <Divider></Divider>
      <Divider>Space-between</Divider>
      <Row justify="space-between">
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
        <Col span={4}>
          <BorderBox>Col 4</BorderBox>
        </Col>
      </Row>
      <Divider></Divider>
    </ComponentDoc>
    <ComponentDoc code={gridCodePart3} api={gridAPI}>
      <Divider>Colum with offset</Divider>
      <Row>
        <Col span={6}>
          <BorderBox>Col 6</BorderBox>
        </Col>
        <Col span={6} offset={6}>
          <BorderBox>Col 6</BorderBox>
        </Col>
      </Row>
      <Divider>Complex Layout</Divider>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <BorderBox>First Name</BorderBox>
        </Col>
        <Col span={12}>
          <BorderBox>Last Name</BorderBox>
        </Col>
        <Col span={18}>
          <BorderBox>Email</BorderBox>
        </Col>
        <Col span={24}>
          <BorderBox>Street Address</BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox>City</BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox>State</BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox>Zip Code</BorderBox>
        </Col>
      </Row>
      <Divider>Complex Layout 2</Divider>
      <Row>
        <Col span={12}>
          <BorderBox>First Name</BorderBox>
        </Col>
        <Col span={12}>
          <BorderBox>Last Name</BorderBox>
        </Col>
      </Row>
      <Row>
        <Col span={18}>
          <BorderBox>Email</BorderBox>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <BorderBox>Street Address</BorderBox>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <BorderBox>City</BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox>State</BorderBox>
        </Col>
        <Col span={8}>
          <BorderBox>Zip Code</BorderBox>
        </Col>
      </Row>
    </ComponentDoc>
  </>
);

export default GridExample;
