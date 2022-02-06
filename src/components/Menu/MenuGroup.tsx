import * as React from "react";
import classNames from "classnames";

import { parseChildren } from "../../utils/nodeUtil";

type MenuItemGroupProps = {
  title?: React.ReactNode;
  children?: React.ReactNode;
};

const prefixCls = "menu-item-group";

const MenuItemGroup = (props: MenuItemGroupProps) => {
  const { children, title } = props;
  const childList: React.ReactElement[] = parseChildren(children, []);
  return (
    <li>
      <div className={`${prefixCls}-title`}>{title}</div>
      <ul className={`${prefixCls}-list`}>{childList}</ul>
    </li>
  );
};

export default MenuItemGroup;
