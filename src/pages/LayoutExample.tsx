import * as React from "react";

import { Layout } from "../layout";
import Divider from "../components/Divider/Divider";
import "./style/index.scss";

const LayoutExample = () => (
  <div className="layout-example">
    <Divider>Basic Layout</Divider>
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>Content</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
    <Divider>Layout with Sider</Divider>
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
    <Divider>Layout with Sider p2</Divider>
    <Layout>
      <Layout.Sider>Sider</Layout.Sider>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>Content</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Layout>
  </div>
);

export default LayoutExample;