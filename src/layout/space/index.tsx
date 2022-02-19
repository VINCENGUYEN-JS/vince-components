import * as React from "react";
import classNames from "classnames";
import toArray from "rc-util/lib/Children/toArray";

import Item from "./Item";
import "./style/index.scss";

const prefixCls = "space";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "end" | "center" | "baseline";
  direction?: "horizontal" | "vertical";
}

const Space = (props: TagProps) => {
  const {
    children,
    className,
    align,
    direction = "horizontal",
    style: customStyle,
  } = props;
  const mergedAlign =
    align === undefined && direction === "horizontal" ? "center" : align;
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    },
    className
  );
  const childNodes = toArray(children, { keepEmpty: true });
  const nodes = childNodes.map((child) => <Item key={child.key}>{child}</Item>);
  return (
    <div className={classes} style={customStyle}>
      {nodes}
    </div>
  );
};

export default Space;
