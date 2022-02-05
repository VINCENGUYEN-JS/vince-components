import * as React from "react";

type MenuProps = {
  children: React.ReactNode;
};

const Menu = (props: MenuProps) => {
  const { children } = props;
  return <ul>{children}</ul>;
};

export default Menu;
