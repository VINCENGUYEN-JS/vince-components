import * as React from "react";

import { DownloadOutlined } from "@ant-design/icons";
import Button from "../components/Button/Button";

const ButtonExample = () => (
  <div style={{ marginTop: "20px" }}>
    <Button type="primary" size="large">
      Primary
    </Button>
    <br />
    <br />
    <Button type="dashed" size="small">
      Primary
    </Button>
    <br />
    <br />
    <Button type="primary" shape="round">
      I'm Round
    </Button>
    <br />
    <br />
    <Button type="primary" shape="round" size="large">
      I'm Round And Large
    </Button>
    <br />
    <br />
    <Button type="primary" shape="circle" size="large">
      I'm Circle And Large
    </Button>
    <br />
    <br />
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
