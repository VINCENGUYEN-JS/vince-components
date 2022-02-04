import * as React from "react";

import { Layout } from "../layout";
import "./style/index.scss";

const LayoutExample = () => (
  <>
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  </>
);

export default LayoutExample;
