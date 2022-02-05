import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Layout } from "./layout/index";
import {
  ButtonExample,
  DividerExample,
  GridExample,
  LayoutExample,
} from "./pages";

const Nav = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Link to="/button">Button</Link>
    <Link to="/divider">Divider</Link>
    <Link to="/grid">Grid</Link>
    <Link to="/layout">Layout</Link>
  </div>
);

function App() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Sider>
          <Nav />
        </Layout.Sider>
        <Layout.Content>
          <Routes>
            <Route path="/button" element={<ButtonExample />} />
            <Route path="/divider" element={<DividerExample />} />
            <Route path="/grid" element={<GridExample />} />
            <Route path="/layout" element={<LayoutExample />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
