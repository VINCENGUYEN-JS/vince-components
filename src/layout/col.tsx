import * as React from "react";
import classNames from "classnames";

const prefixCls = "col";

type ColProps = {
  children: React.ReactNode;
  span?: number;
};

const Col = (props: ColProps) => {
  const { children, span } = props;
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
  });

  return <div className={classes}>{children}</div>;
};

export default Col;
