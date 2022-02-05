import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

const prefixCls = "menu";

const Menu = (props: MenuProps) => {
  const { children, style: customStyle } = props;
  const classes = classNames(prefixCls, {});
  return (
    <ul className={classes} style={customStyle}>
      {children}
    </ul>
  );
};

export default Menu;
