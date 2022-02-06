import * as React from "react";

type MenuProps = {
  children: React.ReactNode;
};

const prefixCls = "menu-item";

const MenuItem = (props: MenuProps) => {
  const { children } = props;
  const onInternalClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    console.log(e);
  };
  return (
    <li className={prefixCls} onClick={onInternalClick}>
      {children}
    </li>
  );
};

export default MenuItem;
