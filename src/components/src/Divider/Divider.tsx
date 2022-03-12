import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

const prefixCls = "divider";

type DividerProps = {
  children?: React.ReactNode;
  type?: "horizontal" | "vertical";
  orientation?: "left" | "right" | "center";
};

const Divider = (props: DividerProps) => {
  const { children, type = "horizontal", orientation = "center" } = props;
  const hasChildren = !!children;
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-with-text`]: hasChildren,
    [`${prefixCls}-with-text-${orientation}`]: hasChildren,
  });
  return <div className={classes}>{children}</div>;
};

export default Divider;
