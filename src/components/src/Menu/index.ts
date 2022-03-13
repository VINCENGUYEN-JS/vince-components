import Menu, { MenuProps } from './Menu';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuGroup';
import SubMenu from './SubMenu';

interface MenuComposition extends React.FC<MenuProps> {
  Item: typeof MenuItem;
  ItemGroup: typeof MenuItemGroup;
  SubMenu: typeof SubMenu;
}

const MenuDefault = Menu as MenuComposition;

MenuDefault.Item = MenuItem;
MenuDefault.ItemGroup = MenuItemGroup;
MenuDefault.SubMenu = SubMenu;

export default MenuDefault;
export { MenuItem, MenuItemGroup, SubMenu };
