import * as React from "react";

import { Space } from "layout";
import ComponentDoc from "template/ComponentDoc";
import Button from "components/Button/Button";
import Divider from "components/Divider/Divider";

const SpaceExample = () => {
  return (
    <ComponentDoc title="Space" introduction="Set components spacing">
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
    </ComponentDoc>
  );
};

export default SpaceExample;
