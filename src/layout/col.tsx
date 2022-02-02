import * as React from "react";
import classNames from "classnames";

import { RowContext } from "./row";

const prefixCls = "col";

type ColProps = {
  children: React.ReactNode;
  span?: number;
};

const Col = (props: ColProps) => {
  const { children, span } = props;
  const { gutter } = React.useContext(RowContext);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
  });

  const mergedStyle: React.CSSProperties = {};

  if (gutter) {
    mergedStyle.paddingLeft = gutter;
    mergedStyle.paddingRight = gutter;
  }

  return (
    <div className={classes} style={{ ...mergedStyle }}>
      {children}
    </div>
  );
};

export default Col;
