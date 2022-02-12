import * as React from "react";

import Divider from "../components/Divider/Divider";
import Menu, { MenuItem, MenuItemGroup } from "../components/Menu";

const MenuExample = () => (
  <div style={{ width: 200 }}>
    <Divider>Vertical Menu</Divider>
    <Menu>
      <MenuItem key="1">1</MenuItem>
      <MenuItem key="2">2-1</MenuItem>
      <MenuItem key="3">3-1</MenuItem>
    </Menu>
    <Divider>Horizontal Menu</Divider>
    <Menu mode="horizontal">
      <MenuItem key="1">1</MenuItem>
      <MenuItem key="2">2-1</MenuItem>
      <MenuItem key="3">3-1</MenuItem>
    </Menu>
    <Divider>Menu Group</Divider>
    <Menu>
      <MenuItemGroup title="Menu Group">
        <MenuItem key="1">1</MenuItem>
        <MenuItem key="2">2-1</MenuItem>
        <MenuItem key="3">3-1</MenuItem>
      </MenuItemGroup>
    </Menu>
  </div>
);

export default MenuExample;
