import * as React from "react";

import ComponentDoc from "../../template/ComponentDoc";
import { Menu, Divider } from "@vince-components";
import { menuAPI } from "../componentApi";

const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

const getSvgIcon = (style = {}) => {
  const path =
    "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h" +
    "-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v" +
    "60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91" +
    ".5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";
  return (
    <i style={style}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{ verticalAlign: "-.125em" }}
      >
        <path d={path} />
      </svg>
    </i>
  );
};

function itemIcon(props: any) {
  return getSvgIcon({
    position: "absolute",
    right: "1rem",
    color: props.isSelected ? "pink" : "inherit",
  });
}

const menuCode = `<Menu>
 <MenuItem key="1">1</MenuItem>
 <MenuItem key="2">2-1</MenuItem>
 <MenuItem key="3">3-1</MenuItem>
</Menu>

<Menu mode="horizontal">
 <MenuItem key="1">1</MenuItem>
 <MenuItem key="2">2-1</MenuItem>
 <MenuItem key="3">3-1</MenuItem>
</Menu>

<Menu>
<MenuItemGroup title="Menu Group">
  <MenuItem key="1">1</MenuItem>
  <MenuItem key="2">2-1</MenuItem>
  <MenuItem key="3">3-1</MenuItem>
</MenuItemGroup>
</Menu>

<Menu>
  <SubMenu title="Menu Group" itemIcon={itemIcon}>
    <MenuItem key="1">1</MenuItem>
    <MenuItem key="2">2-1</MenuItem>
    <MenuItem key="3">3-1</MenuItem>
  </SubMenu>
</Menu>`;

const MenuExample = () => (
  <>
    <ComponentDoc
      title="Menu"
      introduction="A versatile menu for navigation"
      code={menuCode}
      api={menuAPI}
    >
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
        <Divider>Sub Menu</Divider>
        <Menu>
          <SubMenu title="Menu Group" itemIcon={itemIcon}>
            <MenuItem key="1">1</MenuItem>
            <MenuItem key="2">2-1</MenuItem>
            <MenuItem key="3">3-1</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </ComponentDoc>
  </>
);

export default MenuExample;
