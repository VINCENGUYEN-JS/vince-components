import * as React from "react";

import { Space } from "layout";
import ComponentDoc from "template/ComponentDoc";
import Button from "components/Button/Button";
import Divider from "components/Divider/Divider";
import { spaceAPI } from "../componentApi";

const spaceCode = `<Space>
  space
  <Button type="primary">Button</Button>
</Space>

<Space direction="vertical">
  space
  <Button type="primary">Button</Button>
</Space>`;

const SpaceAlignBlock = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      flex: "none",
      margin: "8px 4px",
      padding: "4px",
      border: "1px solid #40a9ff",
    }}
  >
    {children}
  </div>
);

const SpaceExample = () => {
  return (
    <ComponentDoc
      title="Space"
      introduction="Set components spacing"
      api={spaceAPI}
      code={spaceCode}
    >
      <Divider> [horizontal]</Divider>
      <Space>
        space
        <Button type="primary">Button</Button>
      </Space>
      <Divider>[vertical]</Divider>
      <Space direction="vertical">
        space
        <Button type="primary">Button</Button>
      </Space>
      <Divider>[align]</Divider>

      <div style={{ display: "flex", alignItems: "flexStart" }}>
        <SpaceAlignBlock>
          <Space>
            center space
            <Button type="primary" style={{ height: "100px" }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="start">
            start space
            <Button type="primary" style={{ height: "100px" }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="end">
            end space
            <Button type="primary" style={{ height: "100px" }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
        <SpaceAlignBlock>
          <Space align="baseline">
            baseline space
            <Button type="primary" style={{ height: "100px" }}>
              Button
            </Button>
          </Space>
        </SpaceAlignBlock>
      </div>
    </ComponentDoc>
  );
};

export default SpaceExample;
