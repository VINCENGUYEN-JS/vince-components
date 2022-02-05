import * as React from "react";

type MenuProps = {
  children: React.ReactNode;
};

const MenuItem = (props: MenuProps) => {
  const { children } = props;
  return <li>{children}</li>;
};

export default MenuItem;
