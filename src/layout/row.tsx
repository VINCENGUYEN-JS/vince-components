import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

const RowContext = React.createContext({});

const prefixCls = "row";

type RowProps = {
  children: React.ReactNode;
};

const Row = (props: RowProps) => {
  const { children } = props;
  const classes = classNames(prefixCls, {});
  return (
    <RowContext.Provider value={{}}>
      <div className={classes}>{children}</div>
    </RowContext.Provider>
  );
};

export default Row;
