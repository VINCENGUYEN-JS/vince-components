import * as React from "react";

import Divider from "../components/Divider/Divider";
import Input from "../components/Input";

const Overview = () => (
  <section className="markdown">
    <h1>Component Overview</h1>
    <section className="markdown">
      <p>Provide you plenty of UI components to enrich your web application</p>
    </section>
    <Divider />
    <Input.Search placeholder="Search in components" />
    <Divider />
  </section>
);

export default Overview;
