import * as React from "react";

import ComponentDoc from "../../template/ComponentDoc";
import { Button, Divider, Result } from "@vince-components";
import { resultAPI } from "../componentApi";

const resultCode = `<Result status="404" title="404" subTitle="Sorry , the page you visited does not exist" extra={<Button type="primary">BackHome</Button>} />`;

const ResultExample = () => (
  <>
    <ComponentDoc
      title="Result"
      introduction="Used to feed back the results of a series of operation tasks"
      api={resultAPI}
      code={resultCode}
    >
      <Divider orientation="left">404</Divider>
      <Result
        status="404"
        title="404"
        subTitle="Sorry , the page you visited does not exist"
        extra={<Button type="primary">BackHome</Button>}
      />
    </ComponentDoc>
  </>
);

export default ResultExample;
