import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Layout } from "./layout/index";
import Menu, { MenuItem, MenuItemGroup } from "./components/Menu";
import {
  ButtonExample,
  DividerExample,
  GridExample,
  LayoutExample,
  MenuExample,
} from "./pages";

const Nav = () => (
  <Menu key="1">
    <MenuItemGroup title="components">
      <MenuItem key="11">
        <Link to="/button">Button</Link>
      </MenuItem>
      <MenuItem key="12">
        <Link to="/divider">Divider</Link>
      </MenuItem>
      <MenuItem key="13">
        <Link to="/menu">Menu</Link>
      </MenuItem>
    </MenuItemGroup>
    <MenuItemGroup title="layouts">
      <MenuItem key="21">
        <Link to="/grid">Grid</Link>
      </MenuItem>
      <MenuItem key="22">
        <Link to="/layout">Layout</Link>
      </MenuItem>
    </MenuItemGroup>
  </Menu>
);

function App() {
  return (
    <div>
      <Layout>
        <Layout style={{ minHeight: "100vh" }}>
          <Layout.Sider style={{ background: "#fff" }}>
            <Nav />
          </Layout.Sider>
          <Layout.Content>
            <div style={{ paddingLeft: "64px" }}>
              <Routes>
                <Route path="/button" element={<ButtonExample />} />
                <Route path="/divider" element={<DividerExample />} />
                <Route path="/grid" element={<GridExample />} />
                <Route path="/layout" element={<LayoutExample />} />
                <Route path="/menu" element={<MenuExample />} />
              </Routes>
            </div>
          </Layout.Content>
        </Layout>
        <Layout.Footer>Vince Nguyen</Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
