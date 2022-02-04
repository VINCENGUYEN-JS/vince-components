import * as React from "react";

import { DownloadOutlined } from "@ant-design/icons";
import Button from "../components/Button/Button";
import Divider from "../components/Divider/Divider";

const ButtonExample = () => (
  <div style={{ marginTop: "20px" }}>
    <Divider orientation="left">Button With Primary + Large</Divider>
    <Button type="primary" size="large">
      Primary
    </Button>
    <Divider orientation="left">Button With Primary + Small</Divider>
    <Button type="dashed" size="small">
      Primary
    </Button>
    <Divider orientation="left">Button With Primary + Round</Divider>
    <Button type="primary" shape="round">
      I'm Round
    </Button>
    <Divider orientation="left">Button With Primary + Round + Large</Divider>
    <Button type="primary" shape="round" size="large">
      I'm Round And Large
    </Button>
    <Divider orientation="left">Button With Primary + Circle + Large</Divider>
    <Button type="primary" shape="circle" size="large">
      I'm Circle And Large
    </Button>
    <Divider orientation="left">
      Button With Primary + Round + Large + Icon
    </Divider>
    <Button
      type="primary"
      icon={<DownloadOutlined />}
      shape="round"
      size="large"
    >
      Download
    </Button>{" "}
  </div>
);

export default ButtonExample;
