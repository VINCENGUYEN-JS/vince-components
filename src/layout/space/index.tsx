import * as React from "react";
import classNames from "classnames";

const prefixCls = "space";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {}

const Space = (props: TagProps) => {
  const { children, className } = props;
  const classes = classNames(prefixCls, className);
  return <div className={classes}>{children}</div>;
};

export default Space;
