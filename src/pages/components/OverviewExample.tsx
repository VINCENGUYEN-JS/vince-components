import * as React from 'react';
import { Link } from 'react-router-dom';

import ComponentDoc from '../../template/ComponentDoc';
import { Divider, Input, Card, Tag, Row, Col, Space } from '@vince-components';

type TextWithSpaceProps = {
  title: string;
  quantity: number;
};

type CardLinkComponentProps = {
  src: string;
  to: string;
  title: string;
};

const styleImg = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '152px',
};

const TextWithSpace = ({ title, quantity }: TextWithSpaceProps) => (
  <h2 className="component-overview-group-title">
    <Space>
      {title}
      <Tag>{quantity}</Tag>
    </Space>
  </h2>
);

const CardLinkComponent = ({ src, to, title }: CardLinkComponentProps) => (
  <Link to={to}>
    <Card title={title}>
      <div style={styleImg}>
        <img src={src} alt={title} />
      </div>
    </Card>
  </Link>
);

const overviewComponents = {
  general: [
    {
      key: 'button',
      to: '/button',
      title: 'Button',
      src: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg',
    },
  ],
  layouts: [
    {
      key: 'divider',
      to: '/divider',
      title: 'Divider',
      src: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg',
    },
    {
      key: 'grid',
      to: '/grid',
      title: 'Grid',
      src: 'https://gw.alipayobjects.com/zos/alicdn/5rWLU27so/Grid.svg',
    },
    {
      key: 'layout',
      to: '/layout',
      title: 'Layout',
      src: 'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg',
    },
    {
      key: 'space',
      to: '/space',
      title: 'Space',
      src: 'https://gw.alipayobjects.com/zos/antfincdn/wc6%263gJ0Y8/Space.svg',
    },
  ],
};

const Overview = () => {
  const generalComponents = overviewComponents.general;
  const layoutComponents = overviewComponents.layouts;
  return (
    <>
      <ComponentDoc
        title="Component Overview"
        introduction="Provide you plenty of UI components to enrich your web application"
      >
        <Divider />
        <Input.Search placeholder="Search in components" />
        <Divider />
        <TextWithSpace title="General" quantity={1} />
        <Row gutter={12}>
          {generalComponents.map((general) => (
            <Col key={general.key} span={6}>
              <CardLinkComponent {...general} />
            </Col>
          ))}
        </Row>
        <TextWithSpace title="Layout" quantity={4} />
        <Row gutter={12}>
          {layoutComponents.map((layout) => (
            <Col key={layout.key} span={6}>
              <CardLinkComponent {...layout} />
            </Col>
          ))}
        </Row>
      </ComponentDoc>
    </>
  );
};

export default Overview;
