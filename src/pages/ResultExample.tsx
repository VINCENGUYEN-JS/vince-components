import * as React from "react";

import Divider from "../components/Divider/Divider";
import Button from "../components/Button/Button";
import Result from "../components/Result";

const ResultExample = () => (
  <section className="markdown">
    <h1>Result</h1>
    <p>Used to feed back the results of a series of operation tasks</p>
    <Divider orientation="left">404</Divider>
    <Result
      status="404"
      title="404"
      subTitle="Sorry , the page you visited does not exist"
      extra={<Button type="primary">BackHome</Button>}
    />
  </section>
);

export default ResultExample;
