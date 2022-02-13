import * as React from "react";

import ComponentDoc from "../template/ComponentDoc";
import Divider from "../components/Divider/Divider";
import Input from "../components/Input";

const Overview = () => (
  <>
    <ComponentDoc
      title="Component Overview"
      introduction="Provide you plenty of UI components to enrich your web application"
    />
    <Divider />
    <Input.Search placeholder="Search in components" />
    <Divider />
  </>
);

export default Overview;
