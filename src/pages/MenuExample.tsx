import * as React from "react";
import Menu, { MenuItem } from "../components/Menu";

const menuStyle = {
  width: 200,
  height: 200,
  overflow: "auto",
};

const MenuExample = () => (
  <div style={{ margin: "20px" }}>
    <Menu style={menuStyle}>
      <MenuItem>1</MenuItem>
      <MenuItem>2-1</MenuItem>
    </Menu>
  </div>
);

export default MenuExample;
