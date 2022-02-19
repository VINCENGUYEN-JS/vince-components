import * as React from "react";

import ComponentDoc from "template/ComponentDoc";
import Divider from "components/Divider/Divider";
import Button from "components/Button/Button";
import Result from "components/Result";

const ResultExample = () => (
  <>
    <ComponentDoc
      title="Result"
      introduction="Used to feed back the results of a series of operation tasks"
    />
    <Divider orientation="left">404</Divider>
    <Result
      status="404"
      title="404"
      subTitle="Sorry , the page you visited does not exist"
      extra={<Button type="primary">BackHome</Button>}
    />
  </>
);

export default ResultExample;
