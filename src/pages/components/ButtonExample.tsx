import * as React from "react";
import { DownloadOutlined } from "@ant-design/icons";

import ComponentDoc from "../../template/ComponentDoc";
import { buttonAPI } from "../componentApi";
import { Button, Divider } from "@vince-components";

const buttonCode = `<Button type="primary">Primary</Button>
<Button type="primary" size="large">Primary + Large</Button>Default</Button>
<Button type="primary" shape="round">Primary + Round</Button>Default</Button>
<Button type="primary" icon={<DownloadOutlined/>} shape="round" size="large">Download</Button>`;

const ButtonExample = () => (
  <>
    <ComponentDoc
      title="Button"
      introduction="To trigger an operation"
      api={buttonAPI}
      apiIntroduction="Diffrent button styles can be combined together.The recomended order is type -> shape -> size"
      code={buttonCode}
    >
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
      </Button>
    </ComponentDoc>
  </>
);

export default ButtonExample;
