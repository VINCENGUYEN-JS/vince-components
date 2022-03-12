import * as React from "react";

import ComponentDoc from "../../template/ComponentDoc";
import { Layout } from "../../layout";
import { Divider } from "@vince-components";
import { layoutAPI } from "../componentApi";

const layoutCode = `<Layout>
  <Layout.Header>Header</Layout.Header>
  <Layout.Content>Content</Layout.Content>
  <Layout.Footer>Footer</Layout.Footer>
</Layout>

<Layout>
  <Layout.Header>Header</Layout.Header>
  <Layout>
    <Layout.Sider>Sider</Layout.Sider>
    <Layout.Content>Content</Layout.Content>
  </Layout>
  <Layout.Footer>Footer</Layout.Footer>
</Layout>

<Layout>
  <Layout.Sider>Sider</Layout.Sider>
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
  </Layout>`;

const LayoutExample = () => (
  <>
    <ComponentDoc
      title="Layout"
      introduction="Layout is a container for arranging content"
      code={layoutCode}
      api={layoutAPI}
    >
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
    </ComponentDoc>
  </>
);

export default LayoutExample;
