import * as React from "react";
import classNames from "classnames";

import "./style/index.scss";

interface RowContextState {
  gutter: number;
}

export const RowContext = React.createContext<RowContextState>(
  {} as RowContextState
);

const prefixCls = "row";

type RowProps = {
  children: React.ReactNode;
  gutter?: number;
};

const Row = (props: RowProps) => {
  const { children, gutter = 0 } = props;
  const classes = classNames(prefixCls, {});

  const rowContext = React.useMemo(
    () => ({
      gutter: gutter,
    }),
    [gutter]
  );
  return (
    <RowContext.Provider value={rowContext}>
      <div className={classes}>{children}</div>
    </RowContext.Provider>
  );
};

export default Row;
