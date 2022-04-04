import * as React from 'react';

import ComponentDoc from '../../template/ComponentDoc';
import { dynamicAPI } from '../componentApi';
import { Card, DynamicGrid } from '@vince-components';

const dynamicGridCode = `<DynamicGrid minWidth="320px">
  <Card
    title="Default size card"
    extra={<a href="#">More</a>}
    style={{ width: '300px' }}>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </Card>
  <Card
    title="Default size card"
    extra={<a href="#">More</a>}
    style={{ width: '300px' }}>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </Card>
  <Card
    title="Default size card"
    extra={<a href="#">More</a>}
    style={{ width: '300px' }}>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </Card>
  <Card
    title="Default size card"
    extra={<a href="#">More</a>}
    style={{ width: '300px' }}>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </Card>
  <Card
    title="Default size card"
    extra={<a href="#">More</a>}
    style={{ width: '300px' }}>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </Card>
  <Card
    title="Default size card"
    extra={<a href="#">More</a>}
    style={{ width: '300px' }}>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </Card>
  <Card
    title="Default size card"
    extra={<a href="#">More</a>}
    style={{ width: '300px' }}>
    <p>Card Content</p>
    <p>Card Content</p>
    <p>Card Content</p>
  </Card>
</DynamicGrid>
`;

const DynamicGridExample = () => {
  return (
    <ComponentDoc
      title="Dynamic Grid"
      introduction="The Grid primitive and its responsive-by-default layout makes building web pages for multiple screens so much easier .Magic repeat(auto-fit, minmax(320px, 1fr))"
      code={dynamicGridCode}
      api={dynamicAPI}
    >
      <DynamicGrid minWidth="320px">
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: '300px' }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: '300px' }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: '300px' }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: '300px' }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: '300px' }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: '300px' }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: '300px' }}
        >
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </Card>
      </DynamicGrid>
    </ComponentDoc>
  );
};

export default DynamicGridExample;
