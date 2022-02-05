import * as React from "react";
import classNames from "classnames";

type MenuItemGroupProps = {
  title?: React.ReactNode;
  children?: React.ReactNode;
};

const prefixCls = "menu-item-group";

const MenuItemGroup = (props: MenuItemGroupProps) => {
  const { children, title } = props;
  return (
    <li>
      <div className={`${prefixCls}-title`}>{title}</div>
      <ul className={`${prefixCls}-list`}>{children}</ul>
    </li>
  );
};

export default MenuItemGroup;
