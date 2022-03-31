import * as React from 'react';

import ComponentDoc from '../../template/ComponentDoc';
import { Menu, Divider } from '@vince-components';
import { menuAPI } from '../componentApi';

const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

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
  <SubMenu title="Menu Group" mode="inline">
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
        <Menu mode="inline">
          <SubMenu title="Menu Group">
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
