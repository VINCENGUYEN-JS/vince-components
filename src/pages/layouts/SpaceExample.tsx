import * as React from 'react';

import ComponentDoc from '../../template/ComponentDoc';
import { spaceAPI } from '../componentApi';
import { Button, Divider, Space } from '@vince-components';

const spaceCode = `<Space>
  space
  <Button type="primary">Button</Button>
</Space>

<Space direction="vertical">
  space
  <Button type="primary">Button</Button>
</Space>

<Space  alignment="center | start | end | baseline">
  space
  <Button type="primary">Button</Button>
</Space>
`;

const SpaceAlignBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      flex: 'none',
      margin: '8px 4px',
      padding: '4px',
      border: '1px solid #40a9ff',
    }}
  >
    {children}
  </div>
);

const SpaceExample = () => {
  return (
    <ComponentDoc
      title="Space or Stack"
      introduction="One of the simplest and yet most common layout patterns found on the web is putting one element on top of another element with consistent space. From form labels, to paragraphs of text, to social media feeds. They all need to stack one thing on top of another with uniform space between them. This problem is precisely what the Stack primitive solves."
      api={spaceAPI}
      code={spaceCode}
    >
      <Divider> [horizontal]</Divider>
      <Space>
        space
        <Button type="primary">Button</Button>
      </Space>
      <Divider>[vertical]</Divider>
      <Space direction="vertical" size={2}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </Space>
      <Divider>[align]</Divider>

      <div style={{ display: 'flex', alignItems: 'flexStart' }}>
        <SpaceAlignBlock>
          <Space>
            center space
            <Button type="primary" style={{ height: '100px' }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="start">
            start space
            <Button type="primary" style={{ height: '100px' }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="end">
            end space
            <Button type="primary" style={{ height: '100px' }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="baseline">
            baseline space
            <Button type="primary" style={{ height: '100px' }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
      </div>
      <Divider>[size]</Divider>
      <div style={{ display: 'flex', alignItems: 'flexStart' }}>
        <SpaceAlignBlock>
          <Space size="small">
            <Button type="primary" style={{ height: '100px' }}>
              Size 8
            </Button>
            <Button type="primary" style={{ height: '100px' }}>
              Small
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="start" size="middle">
            <Button type="primary" style={{ height: '100px' }}>
              Size 16
            </Button>
            <Button type="primary" style={{ height: '100px' }}>
              Middle
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="end" size="large">
            <Button type="primary" style={{ height: '100px' }}>
              Size 24
            </Button>
            <Button type="primary" style={{ height: '100px' }}>
              Large
            </Button>
          </Space>
        </SpaceAlignBlock>
      </div>
    </ComponentDoc>
  );
};

export default SpaceExample;
