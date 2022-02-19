import * as React from "react";

import { Space } from "layout";
import ComponentDoc from "template/ComponentDoc";
import Button from "components/Button/Button";

const SpaceExample = () => {
  return (
    <ComponentDoc title="Space" introduction="Set components spacing">
      <Space>
        space
        <Button type="primary">Button</Button>
      </Space>
    </ComponentDoc>
  );
};

export default SpaceExample;
